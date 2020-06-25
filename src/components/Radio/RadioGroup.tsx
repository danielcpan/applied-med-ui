import React from 'react';
import { Controller } from 'react-hook-form';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

interface IRadioGroupField {
  name: string;
  form: any;
}

const RadioGroup: React.FC<IRadioGroupField> = ({
  name,
  form: { control },
  children,
  ...restProps
}) => (
  <Controller
    name={name}
    control={control}
    as={<MuiRadioGroup>{children}</MuiRadioGroup>}
    {...restProps}
  />
);
export default RadioGroup;
