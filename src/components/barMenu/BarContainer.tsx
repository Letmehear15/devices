import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypeEnum } from '../../api/generated';
import {
  logout,
  selectAuthStatus,
  selectUserInfo,
  selectUserRole,
} from '../../redux/modules/auth';
import { redirectTo } from '../../redux/modules/router';
import { Bar } from './Bar';

export const BarContainer = () => {
  const { success } = useSelector(selectAuthStatus);
  const userRole = useSelector(selectUserRole)
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const isAdmin = userRole === UserTypeEnum['Admin']

  const onLogout = () => {
    dispatch(logout());
  };

  const onRedirect = (path: string) => {
    dispatch(redirectTo(path))
  }

  return <Bar onRedirect={onRedirect} isAdmin={isAdmin} isAuth={success} user={user} onLogout={onLogout}/>;
};
