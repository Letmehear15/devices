import { combineEpics, Epic } from 'redux-observable';
import { merge, of } from 'rxjs';
import { catchError, filter, map, mapTo, mergeMap, tap } from 'rxjs/operators';
import { AuthActions, loginError, loginRequest, loginSuccess, logout } from '.';
import { login } from '../../../api/service/login';
import { deleteTokenFromLocalstorage, setNewToken } from '../../../utils/localstorage';
import { redirectTo } from '../router';

const loginEpic: Epic<AuthActions> = (action$) =>
  action$.pipe(
    filter(loginRequest.match),
    mergeMap(({ payload }) => login(payload)),
    map((user) => loginSuccess(user)),
    catchError((_, caught) => merge(of(loginError()), caught))
  );

const loginSuccessEpic: Epic<AuthActions> = (action$) =>
  action$.pipe(
    filter(loginSuccess.match),
    map(({ payload: { token, id } }) => setNewToken(token, id)),
    mapTo(redirectTo('/devices'))
  );

const loginErrorEpic: Epic<AuthActions> = (action$) =>
  action$.pipe(filter(loginError.match), mapTo(redirectTo('/login')));


const logoutEpic: Epic<AuthActions> = (action$) =>
  action$.pipe(
    filter(logout.match), 
    tap(deleteTokenFromLocalstorage),
    mapTo(redirectTo('/login'))
  );

export default combineEpics<AuthActions>(
  loginEpic,
  loginSuccessEpic,
  loginErrorEpic,
  logoutEpic
);
