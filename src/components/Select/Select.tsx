import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import ReactSelect, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { FormFieldError } from 'components';

const animatedComponents = makeAnimated();

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>
    {props.data.chipLabel ? props.data.chipLabel : props.data.label}
  </components.MultiValue>
);

const SingleValue = (props: any) => (
  <components.SingleValue {...props}>
    {props.data.chipLabel ? props.data.chipLabel : props.data.label}
  </components.SingleValue>
);

const MyCustomSelect = (props: any) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={(selected: any) => {
          if (
            selected?.length > 0 &&
            selected?.[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MyCustomSelect.defaultProps = {
  allOption: {
    label: 'Select all',
    value: '*'
  }
};

type TSelect = {
  /** Registered field name in useForm */
  name: string;
  options: [];
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
}

const Select: React.FC<TSelect> = ({ name, options, form, ...restProps }) => {
  const { control, errors } = form || useFormContext();
  const error = errors?.[name];

  return (
    <>
      <Controller
        as={MyCustomSelect}
        name={name}
        control={control}
        onChange={([selected]: any) => selected}
        isClearable
        options={options}
        error={error}
        components={{ animatedComponents, MultiValue, SingleValue }}
        styles={{
          control: (provided: any) => ({
            ...provided,
            border: error && '1px solid red'
          })
        }}
        {...restProps}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Select;
