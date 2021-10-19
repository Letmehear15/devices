import { DevicesContainer } from './pages/devices/DevicesContainer';
import { LoginContainer } from './pages/login/LoginContainer';
import { Route } from './types';

export const routes: Route[] = [
  {
    id: 1,
    path: '/login',
    exact: true,
    component: LoginContainer,
  },
  {
    id: 2,
    path: '/devices',
    exact: true,
    component: DevicesContainer,
  }
];
