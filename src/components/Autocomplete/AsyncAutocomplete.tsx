import React from 'react';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { FormFieldError } from 'components';
import AsyncAutocompleteBase from './AsyncAutocompleteBase';
import { renderOptionWithSuggestion } from './Autocomplete.utils';

type TAutocomplete = {
  /** Registered field name in useForm */
  name: string;
  loadOptions: (input: string) => Promise<any[]>;
  defaultOptions?: any;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
  disableSuggestions?: boolean;
  suggestionsLimit?: number;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/lab/Autocomplete` as base component.
 * Relies on `react-query` for async data handling
 */
const AsyncAutocomplete: React.FC<TAutocomplete> = ({
  name,
  loadOptions: queryFn,
  defaultOptions = [],
  form,
  rules,
  disableSuggestions = false,
  suggestionsLimit = 3,
  ...restProps
}) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        render={props => (
          <AsyncAutocompleteBase
            renderOption={renderOptionWithSuggestion}
            name={name}
            queryFn={queryFn}
            defaultOptions={defaultOptions}
            disableSuggestions={disableSuggestions}
            suggestionsLimit={suggestionsLimit}
            {...props}
            {...restProps}
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

export default AsyncAutocomplete;
