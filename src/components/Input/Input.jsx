import React from 'react';
import _ from 'lodash';
import { Controller } from 'react-hook-form';
import { Typography, TextField as MuiTextField } from '@material-ui/core';

const Input = ({ name, form: { control, errors }, ...restProps }) => {
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={MuiTextField}
        name={name}
        control={control}
        variant="outlined"
        type="text"
        size="small"
        margin="dense"
        fullWidth
        error={error}
        {...restProps}
      />

      <Typography variant="body2" style={{ color: 'red' }}>
        {error?.message}
      </Typography>
    </>
  );
};

export default Input;
