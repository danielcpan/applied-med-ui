import React from 'react';
import { useFormContext, UseFormMethods } from 'react-hook-form';
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
      color: theme.palette.background.paper,
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
    backgroundColor: theme.palette.background.paper
  },
  checked: {}
}))(MuiSwitch);

interface ISwitch {
  /** Registered field name in useForm */
  name: string;
  offLabel?: string;
  onLabel?: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
}

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/core/Switch` as base component
 */
const Switch: React.FC<ISwitch> = ({
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
          <CustomSwitch inputRef={register} name={name} {...restProps} />
        </Grid>
        <Grid item>{onLabel}</Grid>
      </Grid>
    </Typography>
  );
};

export default Switch;
