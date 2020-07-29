import React from 'react';
import { Controller, useFormContext, UseFormMethods } from 'react-hook-form';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

interface IRadioGroupField {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
}

const RadioGroup: React.FC<IRadioGroupField> = ({ name, form = {}, children, ...restProps }) => {
  const { control } = useFormContext() || form;

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
