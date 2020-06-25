import React from 'react';
import { Controller } from 'react-hook-form';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Switch as MuiSwitch, Grid } from '@material-ui/core';

const CustomSwitch = withStyles(theme => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    overflow: 'visible'
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(20px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 10,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(MuiSwitch);

interface ISwitch {
  name: string;
  offLabel?: string;
  onLabel?: string;
  form: any;
}

const Switch: React.FC<ISwitch> = ({
  name,
  offLabel = 'No',
  onLabel = 'Yes',
  form: { control },
  ...restProps
}) => (
  <Typography component="div">
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>{offLabel}</Grid>
      <Grid item>
        <Controller
          as={<CustomSwitch />}
          type="checkbox"
          name={name}
          control={control}
          {...restProps}
        />
      </Grid>
      <Grid item>{onLabel}</Grid>
    </Grid>
  </Typography>
);

export default Switch;
