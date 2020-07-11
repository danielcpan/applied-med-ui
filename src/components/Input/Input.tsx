import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { TextField as MuiTextField } from '@material-ui/core';
import { FormFieldError } from 'components';

type InputProps = {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/core/TextField` as base component
 */
const Input: React.FC<InputProps> = ({ name, form = {}, rules, ...restProps }) => {
  const context = useFormContext() || {};
  const { control, errors } = { ...form, ...context };
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={<MuiTextField variant="outlined" type="text" size="small" margin="dense" fullWidth />}
        name={name}
        control={control}
        error={error}
        rules={rules}
        {...restProps}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Input;
