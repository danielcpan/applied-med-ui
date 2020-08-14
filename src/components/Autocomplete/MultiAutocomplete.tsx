import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { Checkbox } from '@material-ui/core';
import { FormFieldError } from 'components';
import AutocompleteBase from './AutocompleteBase';
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon
} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
const MultiAutocomplete: React.FC<TAutocomplete> = ({
  name,
  options,
  form,
  rules,
  ...restProps
}) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <AutocompleteBase
            options={options}
            renderOption={(option: any, { selected }: any) => (
              <>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </>
            )}
            onChange={(e: any, data: any) => onChange(data)}
            multiple
            disableCloseOnSelect
            filterSelectedOptions
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

export default MultiAutocomplete;
