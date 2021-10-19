import React from 'react';
import { useDispatch } from 'react-redux';
import { showAllowed, sortDevices, SortDevices } from '../../redux/modules/device';
import { SortHeader } from './SortHeader';

export const SortHeaderContainer = () => {
  const dispatch = useDispatch();

  const onSortDevices = (payload: SortDevices) => {
    dispatch(sortDevices(payload))
  };

  const selectAllowedDevices = (checked: boolean) => {
    dispatch(showAllowed(checked))
  }

  return <SortHeader selectAllowedDevices={selectAllowedDevices} onSortDevices={onSortDevices} />;
};
