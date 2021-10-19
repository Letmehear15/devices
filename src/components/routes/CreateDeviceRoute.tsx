import React from 'react';
import { Route } from 'react-router';
import { CreateDeviceContainer } from '../../pages/createDevice/CreateDeviceContainer';

export const CreateDeviceRoute = () => {
  return <Route exact path="/create-device" children={<CreateDeviceContainer/>} />;
};
