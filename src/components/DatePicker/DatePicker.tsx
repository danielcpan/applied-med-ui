import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { FormFieldError } from 'components';

type DatePickerProps = {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/pickers/KeyboardDatePicker` as base component
 */
const DatePicker: React.FC<DatePickerProps> = ({ name, form = {}, rules, ...restProps }) => {
  const context = useFormContext() || {};
  const { control, errors } = { ...form, ...context };
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
