import React from 'react';
import _ from 'lodash';
import { Controller } from 'react-hook-form';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DatePicker = ({ name, form: { control, errors }, ...restProps }) => {
  const error = _.get(errors, name);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        as={
          <KeyboardDatePicker
            clearable
            disableToolbar
            variant="dialog"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            margin="dense"
            fullWidth
          />
        }
        name={name}
        control={control}
        {...restProps}
      />

      <Typography variant="body2" style={{ color: 'red' }}>
        {error?.message}
      </Typography>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;