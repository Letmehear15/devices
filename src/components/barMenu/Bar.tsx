import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';
import { Route } from 'react-router';
import { User, UserWithToken } from '../../api/generated';

const useStyles = makeStyles(() => ({
  root: {
    height: 70,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

type BarProps = {
  isAuth: boolean;
  isAdmin: boolean;
  user: UserWithToken | User;
  onLogout: () => void;
  onRedirect: (path: string) => void;
};

export const Bar: FC<BarProps> = ({
  isAuth,
  onLogout,
  user,
  isAdmin,
  onRedirect,
}) => {
  const classes = useStyles();
  const { login } = user;

  return (
    <AppBar color="primary" position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography>deviceChecker</Typography>
        {isAuth && (
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: 20 }}>{login}</Typography>
            <Button onClick={onLogout} variant="contained" color="default">
              Logout
            </Button>
            {isAdmin && (
              <>
                <Route path="/devices">
                  <Button
                    style={{ marginLeft: 20 }}
                    onClick={() => onRedirect('/create-device')}
                    variant="contained"
                    color="default"
                  >
                    Create device
                  </Button>
                </Route>
                <Route path="/create-device">
                  <Button
                    style={{ marginLeft: 20 }}
                    onClick={() => onRedirect('/devices')}
                    variant="contained"
                    color="default"
                  >
                    Back to main
                  </Button>
                </Route>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
