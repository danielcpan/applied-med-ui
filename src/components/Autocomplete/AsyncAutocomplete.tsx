import React from 'react';
import _ from 'lodash';
import { useQuery, useMutation } from 'react-query';
import {
  useForm,
  Controller,
  useFormContext,
  UseFormMethods,
  ValidationRules
} from 'react-hook-form';
import { Checkbox, CircularProgress } from '@material-ui/core';
import { FormFieldError } from 'components';
import AutocompleteBase from './AutocompleteBase';
import { InputBase } from '../Input';
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon
} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type TAutocomplete = {
  /** Registered field name in useForm */
  name: string;
  loadOptions: (input: string) => Promise<any>;
  defaultOptions?: any;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
};

/**
 * Uses `react-hook-form` for form data management
 * and `material-ui/lab/Autocomplete` as base component
 */
const MultiAutocomplete: React.FC<TAutocomplete> = ({
  name,
  loadOptions: mutationFn,
  defaultOptions = [],
  form = {},
  rules,
  ...restProps
}) => {
  const { control, errors } = useFormContext() || form;
  const error = _.get(errors, name);
  console.log('async errors:', errors);

  // console.log('autocompleteForm:', autocompleteForm.getValues('async-autocomplete'));

  // const { isLoading, isError, data, refetch } = useQuery(
  //   `async-autocomplete-${name}`,
  //   loadOptions,
  //   {
  //     queryFnParamsFilter: args => args.slice(1)
  //   }
  // );
  // // console.log('asyncData:', data);

  // Normally should useQuery but in this instance, useMutation was just easier.
  const [loadOptions, options] = useMutation(mutationFn);
  console.log('options:', options);

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <AutocompleteBase
            renderInput={(params: any) => (
              <InputBase
                {...params}
                error={options.isError}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {options.isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
            options={options.data || defaultOptions}
            loading={options.isLoading}
            onChange={(e: any, data: any) => onChange(data)}
            onInputChange={_.debounce((e, newInputValue) => {
              loadOptions(newInputValue);
            }, 1000)}
            noOptionsText={
              options.isError ? 'Opps! Something went wrong. Please try again later.' : 'No Options'
            }
            rules={rules}
            {...props}
            {...restProps}
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

export default MultiAutocomplete;
