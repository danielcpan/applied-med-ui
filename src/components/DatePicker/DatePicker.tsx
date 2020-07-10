import React, { useMemo } from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { FormFieldError, FieldProps } from 'components';

const DatePicker: React.FC<FieldProps> = ({ name, form, rules, ...restProps }) => {
  const context = useFormContext();
  const { control, errors } = useMemo(() => ({ ...form, ...context }), []);
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
            onChange={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
            value={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
            {...restProps}
          />
        }
        name={name}
        control={control}
        rules={rules}
      />

      <FormFieldError error={error} />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
