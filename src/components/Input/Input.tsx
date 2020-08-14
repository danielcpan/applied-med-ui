import React from 'react';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { FormFieldError } from 'components';
import InputBase from './InputBase';

type TInput = {
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
const Input: React.FC<TInput> = ({ name, form, rules, ...restProps }) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        as={InputBase}
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
