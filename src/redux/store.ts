import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History} from 'history';
import { createEpicMiddleware } from 'redux-observable';
import { epicRoot } from './epicRoot';

import authReducer from './modules/auth/reducer'
import initReducer from './modules/init/reducer'
import deviceReducer from './modules/device/reducer'


const rootReducer = (history: History) =>
  combineReducers({
    authReducer,
    initReducer,
    deviceReducer,
    router: connectRouter(history),
  });

export const history: History = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>[ 
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    epicMiddleware,
    routerMiddleware(history),
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleware.run(epicRoot);

export type RootState = ReturnType<typeof store.getState>;