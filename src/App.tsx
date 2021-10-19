import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserWithTokenTypeEnum } from './api/generated';
import { BarContainer } from './components/barMenu/BarContainer';
import { Loading } from './components/Loading';
import { CreateDeviceRoute } from './components/routes/CreateDeviceRoute';
import { RouteComponent } from './components/routes/RouteComponent';
import { selectUserInfo } from './redux/modules/auth';
import { selectInitStatus, tokenInit } from './redux/modules/init';

function App() {
  const { type } = useSelector(selectUserInfo);
  const isAppInit = useSelector(selectInitStatus);

  const dispatch = useDispatch()

  const isAdmin = type === UserWithTokenTypeEnum['Admin']

  useEffect(() => {
    dispatch(tokenInit())
  }, [dispatch])

  if (isAppInit) {
    return <Loading />;
  }

  return (
    <>
      <BarContainer/>
      <RouteComponent />
      {isAdmin && <CreateDeviceRoute />}
    </>
  );
}

export default App;
