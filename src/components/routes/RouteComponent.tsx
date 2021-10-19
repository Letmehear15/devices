import React from 'react';
import { Route } from 'react-router';
import { routes } from '../../routes';

export const RouteComponent = () => {
  return (
    <>
      {routes.map((router) => {
        return (
          <Route
            key={router.id}
            exact={router.exact}
            path={router.path}
            children={<router.component />}
          />
        );
      })}
    </>
  );
};
