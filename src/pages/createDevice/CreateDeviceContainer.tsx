import React from 'react';
import { useDispatch } from 'react-redux';
import { EditPhone } from '../../api/generated';
import { createNewDevice } from '../../redux/modules/device';
import { CreateDevice } from './CreateDevice';

export const CreateDeviceContainer = () => {
  const dispatch = useDispatch();
  const onCreateDevice = (deviceInfo: EditPhone) => {
    dispatch(createNewDevice(deviceInfo))
  };

  return <CreateDevice onCreateDevice={onCreateDevice} />;
};
