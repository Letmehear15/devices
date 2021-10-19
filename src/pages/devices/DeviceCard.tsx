import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { FC, memo } from 'react';
import { Phone } from '../../api/generated';

import noImg from '../../assets/noImg.jpeg';

const useStyles = makeStyles(() => ({
  card: {
    width: 350,
    marginBottom: 50,
  },
  imageWrapper: {
    width: 200,
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  borrowedInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 5,
    backgroundColor: '#000',
    color: '#fff',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardHeader: {
    position: 'relative',
    marginBottom: 30
  },
  os: {
    color: '#a3a3a3'
  }
}));

type DeviceCardProps = {
  device: Phone;
  onBorrow: (id: string) => void;
};

export const DeviceCard: FC<DeviceCardProps> = memo(({ device, onBorrow }) => {
  const classes = useStyles();
  const { borrowed, image, os, model, id, osVersion, vendor } = device;
  const isBorrowed = Boolean(borrowed?.user);
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardHeader}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src={image ? image : noImg}
              alt="device"
              loading="lazy"
            />
          </div>
          {isBorrowed && (
            <div className={classes.borrowedInfo}>
              <Typography component="span">
                Borrowed by: {borrowed?.user?.name},
              </Typography>
              <Typography component="span">
                {' '}
                {new Date(borrowed?.date as number).toLocaleDateString()}
                {' '}
                {new Date(borrowed?.date as number).toLocaleTimeString()}
              </Typography>
            </div>
          )}
        </div>

        <div style={{ width: '100%' }}>
          <Typography variant="h5">{model}</Typography>
          <Typography variant="h5">{vendor}</Typography>
          <Typography className={classes.os}>{os} / {osVersion}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          disabled={isBorrowed}
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => onBorrow(id as string)}
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
});
