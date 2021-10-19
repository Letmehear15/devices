import { replace } from 'connected-react-router';
import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { RouterActions } from '.';

import { redirectTo } from './reducer';

export const getRouteEpic: Epic = (action$) =>
  action$.pipe(
    filter(redirectTo.match),
    mergeMap((action) => of(replace(action.payload)))
  );

export default combineEpics<RouterActions>(getRouteEpic);
