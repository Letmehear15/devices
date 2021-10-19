import { createAction, createReducer, Draft } from '@reduxjs/toolkit';
import { VendorsEnum } from '.';
import { EditPhone, Phone, PhoneOsEnum } from '../../../api/generated';

export type SortDevices = {
  vendor: VendorsEnum | 'All';
  os: PhoneOsEnum | 'All';
};

export const fetchDevices = createAction('devices/fetch_devices');
export const fetchDevicesSuccess = createAction<Phone[]>('devices/fetch_devices_success');
export const fetchDevicesError = createAction('devices/fetch_devices_error');

export const sortDevices = createAction<SortDevices>('devices/sort_device');
export const showAllowed = createAction<boolean>('devices/show_allowed');

export const createNewDevice = createAction<EditPhone>('devices/create_new_device');
export const borrowDevice = createAction<string>('devices/borrow_device');

export type DeviceActions = ReturnType<
  | typeof fetchDevices
  | typeof fetchDevicesSuccess
  | typeof fetchDevicesError
  | typeof sortDevices
  | typeof createNewDevice
>;

const initialState = {
  devices: [] as Phone[],
  status: {
    loading: false,
    error: false
  },
  sortOs: 'All' as PhoneOsEnum | 'All',
  sortVendor: 'All' as 'All' | VendorsEnum,
  areAllowed: false
};

type DeviceState = Draft<typeof initialState>;

export default createReducer(initialState, {
  [fetchDevices.type]: (state: DeviceState) => {
    state.devices = [];
    state.status = {
      loading: true,
      error: false
    }
  },
  [fetchDevicesSuccess.type]: (
    state: DeviceState,
    action: ReturnType<typeof fetchDevicesSuccess>
  ) => {
    state.devices = action.payload;
    state.sortOs = 'All';
    state.sortVendor = 'All';
    state.status = {
      loading: false,
      error: false
    }
  },
  [fetchDevicesError.type]: (state: DeviceState) => {
    state.devices = [];
    state.status = {
      loading: false,
      error: true
    }
  },
  [showAllowed.type]: (state: DeviceState, action: ReturnType<typeof showAllowed>) => {
    state.areAllowed = action.payload
  },
  [sortDevices.type]: (
    state: DeviceState,
    action: ReturnType<typeof sortDevices>
  ) => {
    const { os, vendor } = action.payload;
    state.sortVendor = vendor;
    state.sortOs = os;
  },
});
