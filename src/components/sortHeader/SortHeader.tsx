import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { FC, useMemo, useState } from 'react';
import { PhoneOsEnum } from '../../api/generated';
import {
  getVendors,
  SortDevices,
  VendorsEnum,
} from '../../redux/modules/device';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 40,
  },
  form: {
    width: 200,
    marginRight: 40,
  },
}));

type SortHeaderProps = {
  onSortDevices: (payload: SortDevices) => void;
  selectAllowedDevices: (checked: boolean) => void;
};

export const SortHeader: FC<SortHeaderProps> = ({
  onSortDevices,
  selectAllowedDevices,
}) => {
  const classes = useStyles();

  const [os, setOs] = useState<PhoneOsEnum | 'All'>('All');
  const [vendor, setVendor] = useState<VendorsEnum | 'All'>('All');
  const [checked, setChecked] = useState(false);

  const onOsChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedOS = e.target.value as PhoneOsEnum;
    setOs(selectedOS);
    onSortDevices({ os: selectedOS, vendor });
  };

  const onVendorChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedVendor = e.target.value as VendorsEnum;
    setVendor(selectedVendor);
    onSortDevices({ os, vendor: selectedVendor });
  };

  const onCheck = () => {
    selectAllowedDevices(!checked);
    setChecked((prev) => !prev);
  };
  const vendors = useMemo(() => getVendors(), []);

  return (
    <div className={classes.root}>
      <FormControl className={classes.form}>
        <InputLabel id="system">System</InputLabel>
        <Select id="system" value={os} label="System" onChange={onOsChange}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value={PhoneOsEnum['Ios']}>IOS</MenuItem>
          <MenuItem value={PhoneOsEnum['Android']}>Android</MenuItem>
          <MenuItem value={PhoneOsEnum['Windows']}>Windows</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel id="vendors">Venrods</InputLabel>
        <Select
          id="vendors"
          value={vendor}
          label="Vendors"
          onChange={onVendorChange}
        >
          <MenuItem value="All">All</MenuItem>
          {vendors.map((vendor) => (
            <MenuItem key={vendor} value={vendor}>
              {vendor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onCheck}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        }
        label="Allowed"
      />
    </div>
  );
};
