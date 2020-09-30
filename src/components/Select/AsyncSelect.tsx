import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import ReactSelectAsync from 'react-select/async';
import { FormFieldError } from 'components';

type TAsyncSelect = {
  /** Registered field name in useForm */
  name: string;
  loadOptions: (input: any, callback: any) => void;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
}

const AsyncSelect: React.FC<TAsyncSelect> = ({ name, loadOptions, form, ...restProps }) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        as={
          <ReactSelectAsync
            isClearable
            cacheOptions
            loadOptions={loadOptions}
            styles={{
              control: (provided: any) => ({
                ...provided,
                border: error && '1px solid red'
              })
            }}
          />
        }
        name={name}
        control={control}
        onChange={([selected]: any) => selected}
        error={error}
        {...restProps}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default AsyncSelect;
