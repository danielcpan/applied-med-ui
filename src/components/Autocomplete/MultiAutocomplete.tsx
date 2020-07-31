import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import { TextField, Checkbox } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { FormFieldError } from 'components';
import { MyAutocomplete } from './Autocomplete.utils';
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

const MultiAutocomplete: React.FC<TAutocomplete> = ({ name, options, form = {}, ...restProps }) => {
  const { control, errors } = useFormContext() || form;
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <MyAutocomplete
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
            size="small"
            clearOnEscape
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
      />

      <FormFieldError error={error} />
    </>
  );
};

export default MultiAutocomplete;
