import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useMemo, useState } from 'react';
import { EditPhone, EditPhoneOsEnum } from '../../api/generated';
import { getVendors, VendorsEnum } from '../../redux/modules/device';

const useStyles = makeStyles(() => ({
  root: {
    width: '40%',
    margin: 'auto',
    marginTop: 200,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginTop: 20,
  },
}));

type CreateDeviceProps = {
  onCreateDevice: (deviceInfo: EditPhone) => void;
};

export const CreateDevice: FC<CreateDeviceProps> = ({ onCreateDevice }) => {
  const classes = useStyles();

  const [code, setCode] = useState('');
  const [vendor, setVendor] = useState('');
  const [model, setModel] = useState('');
  const [os, setOs] = useState<EditPhoneOsEnum>();
  const [osVersion, setOsVersion] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const vendors = useMemo(() => getVendors(), []);

  const onSubmit = () => {
    onCreateDevice({
      image: imageUrl,
      code,
      vendor,
      osVersion,
      os,
      model,
    });
  };

  const onOsSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedOs = e.target.value as EditPhoneOsEnum;
    setOs(selectedOs);
  };

  const onVendorChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedVendor = e.target.value as VendorsEnum;
    setVendor(selectedVendor);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography>New device</Typography>
        <TextField
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
          value={code}
          className={classes.field}
          label="Id"
        />
        <FormControl className={classes.field} required>
          <InputLabel id="vendors">Venrods</InputLabel>
          <Select
            id="vendors"
            value={vendor}
            label="Vendors"
            onChange={onVendorChange}
          >
            {vendors.map((vendor) => (
              <MenuItem key={vendor} value={vendor}>
                {vendor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setModel(e.target.value)
          }
          value={model}
          className={classes.field}
          label="Model"
        />
        <FormControl className={classes.field} required>
          <InputLabel id="system">System</InputLabel>
          <Select id="system" value={os} label="System" onChange={onOsSelect}>
            <MenuItem value={EditPhoneOsEnum['Ios']}>IOS</MenuItem>
            <MenuItem value={EditPhoneOsEnum['Android']}>Android</MenuItem>
            <MenuItem value={EditPhoneOsEnum['Windows']}>Windows</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOsVersion(e.target.value)
          }
          value={osVersion}
          className={classes.field}
          label="Version of OS"
        />
        <TextField
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageUrl(e.target.value)
          }
          value={imageUrl}
          className={classes.field}
          label="Image URL"
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={onSubmit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Create new device
        </Button>
      </CardActions>
    </Card>
  );
};
