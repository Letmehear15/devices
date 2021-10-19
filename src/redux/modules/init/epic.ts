import { combineEpics, Epic } from 'redux-observable';
import { merge, of } from 'rxjs';
import { catchError, filter, map, mapTo, mergeMap } from 'rxjs/operators';
import { getAuthDataFromLocalStorage } from '../../../utils/localstorage';
import { redirectTo } from '../router';
import { InitActions, initWithoutToken, initWithToken, tokenInit } from '.';
import { getUser } from '../../../api/service/login';
import { UsersIdGetRequest } from '../../../api/generated';

export const appInitEpic: Epic<InitActions> = (action$) =>
  action$.pipe(
    filter(tokenInit.match),
    mapTo(getAuthDataFromLocalStorage()),
    mergeMap((payload) => getUser(payload as UsersIdGetRequest)),
    map(initWithToken),
    catchError((_, caught) => merge(of(redirectTo('/login')), caught))
  );
export const appInitWithTokenEpic: Epic<InitActions> = (action$) =>
  action$.pipe(filter(initWithToken.match), map(() => window.location.pathname),map(redirectTo));

export const appInitWithOutTokenEpic: Epic<InitActions> = (action$) =>
  action$.pipe(filter(initWithoutToken.match), mapTo(redirectTo('/login')));

export default combineEpics<InitActions>(appInitEpic, appInitWithTokenEpic, appInitWithOutTokenEpic);
