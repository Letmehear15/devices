import { Box, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const useStyles = makeStyles({
  loadingWrapper: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loadingWrapper}>
      <CircularProgress color="primary" />
    </Box>
  );
};
