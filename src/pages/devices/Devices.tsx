import { Box, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { Phone } from '../../api/generated';
import { SortHeaderContainer } from '../../components/sortHeader/SortHeaderContainer';
import { DeviceCard } from './DeviceCard';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
    padding: 50,
  },
}));

type DevicesProps = {
  devices: Phone[];
  onBorrow: (id: string) => void;
};

export const Devices: FC<DevicesProps> = ({ devices, onBorrow }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SortHeaderContainer />
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {devices.map((device) => (
          <DeviceCard key={device.id} onBorrow={onBorrow} device={device} />
        ))}
      </Box>
    </div>
  );
};
