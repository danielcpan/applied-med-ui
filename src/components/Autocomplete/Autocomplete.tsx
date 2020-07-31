import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { FormFieldError } from 'components';
import { MyAutocomplete } from './Autocomplete.utils';

type TAutocompleteInput = {
  /** Registered field name in useForm */
  name: string;
  options: [];
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
};

const AutocompleteInput: React.FC<TAutocompleteInput> = ({
  name,
  options,
  form = {},
  ...restProps
}) => {
  const { control, errors } = useFormContext() || form;
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <MyAutocomplete
            options={options}
            onChange={(e: any, data: any) => onChange(data)}
            {...restProps}
            {...props}
          />
        )}
        onChange={([, data]: any) => data}
        control={control}
        name={name}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default AutocompleteInput;
