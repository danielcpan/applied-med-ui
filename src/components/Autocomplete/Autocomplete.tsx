import React from 'react';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { FormFieldError } from 'components';
import AutocompleteBase from './AutocompleteBase';

type TAutocomplete = {
  /** Registered field name in useForm */
  name: string;
  options: [];
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/lab/Autocomplete` as base component
 */
const Autocomplete: React.FC<TAutocomplete> = ({ name, options, form, rules, ...restProps }) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <AutocompleteBase
            options={options}
            onChange={(e: any, data: any) => onChange(data)}
            {...restProps}
            {...props}
          />
        )}
        onChange={([, data]: any) => data}
        control={control}
        name={name}
        rules={rules}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Autocomplete;
