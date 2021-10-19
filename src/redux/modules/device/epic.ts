import { combineEpics, Epic } from 'redux-observable';
import { merge, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  borrowDevice,
  createNewDevice,
  DeviceActions,
  fetchDevices,
  fetchDevicesError,
  fetchDevicesSuccess,
  payloadForBorrowDevice,
  payloadForCreatingDevice,
  setBorrowedInState,
} from '.';
import {
  borrowDeviceById,
  createDevice,
  getDevices,
} from '../../../api/service/devices';
import { getTokenFromLocalStorage } from '../../../utils/localstorage';
import { RootState } from '../../store';

const fetchDevicesEpic: Epic<DeviceActions> = (action$) =>
  action$.pipe(
    filter(fetchDevices.match),
    map(() => getTokenFromLocalStorage()),
    mergeMap((token) => getDevices(token)),
    map(fetchDevicesSuccess),
    catchError((_, caught) => merge(of(fetchDevicesError()), caught))
  );

const createNewDeviceEpic: Epic<DeviceActions> = (action$) =>
  action$.pipe(
    filter(createNewDevice.match),
    map(({ payload }) => payloadForCreatingDevice(payload)),
    mergeMap((payload) => createDevice(payload)),
    map(fetchDevices),
    catchError((_, caught) => merge(of(fetchDevicesError()), caught))
  );

const borrowDeviceEpic: Epic<DeviceActions, any, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(borrowDevice.match),
    map(({ payload }) => payloadForBorrowDevice(payload)),
    mergeMap((payload) => borrowDeviceById(payload)),
    withLatestFrom(state$),
    map(([{ id, borrowed }, { deviceReducer: { devices } }]) =>
      setBorrowedInState({ borrowedId: id as string, devices, borrowed })
    ),
    map(fetchDevicesSuccess),
    catchError((_, caught) => merge(of(fetchDevicesError()), caught))
  );

export default combineEpics<DeviceActions, DeviceActions, RootState>(
  fetchDevicesEpic,
  createNewDeviceEpic,
  borrowDeviceEpic
);
