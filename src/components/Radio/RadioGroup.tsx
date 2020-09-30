import React from 'react';
import { Controller, useFormContext, UseFormMethods } from 'react-hook-form';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

type TRadioGroupField = {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
}

const RadioGroup: React.FC<TRadioGroupField> = ({ name, form, children, ...restProps }) => {
  const { control } = form || useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      as={<MuiRadioGroup>{children}</MuiRadioGroup>}
      {...restProps}
    />
  );
};
export default RadioGroup;
