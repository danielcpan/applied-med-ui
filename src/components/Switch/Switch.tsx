import React from 'react';
import { useFormContext, UseFormMethods } from 'react-hook-form';
import SwitchBase from './SwitchBase';
import { Typography, Switch as MuiSwitch, Grid } from '@material-ui/core';

type TSwitch = {
  /** Registered field name in useForm */
  name: string;
  offLabel?: string;
  onLabel?: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/core/Switch` as base component
 */
const Switch: React.FC<TSwitch> = ({
  name,
  offLabel = 'No',
  onLabel = 'Yes',
  form = {},
  ...restProps
}) => {
  const { register } = useFormContext() || form;

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>{offLabel}</Grid>
        <Grid item>
          <SwitchBase inputRef={register} name={name} {...restProps} />
        </Grid>
        <Grid item>{onLabel}</Grid>
      </Grid>
    </Typography>
  );
};

export default Switch;
