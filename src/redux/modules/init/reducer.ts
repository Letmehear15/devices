import { createAction, createReducer, Draft } from '@reduxjs/toolkit';
import { User } from '../../../api/generated';
import { redirectTo } from '../router';

export const tokenInit = createAction('init/token_init');
export const initWithToken = createAction<User>('init/init_with_token');
export const initWithoutToken = createAction('init/init_without_token');

export type InitActions = ReturnType<
  typeof tokenInit | typeof redirectTo | typeof initWithToken
>;

const initialState = {
  isAppInit: false,
};

type InitAppState = Draft<typeof initialState>;

export default createReducer(initialState, {
  [initWithoutToken.type]: (state: InitAppState) => {
    state.isAppInit = true;
  },
  [initWithoutToken.type]: (state: InitAppState) => {
    state.isAppInit = true;
  },
});
