import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import { FormGroup as MuiFormGroup } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { FormFieldError, FieldProps } from 'components';
import { getFormGroupValues } from 'utils/react-hook-form.utils';

const CheckboxGroup: React.FC<FieldProps> = ({
  name,
  form = {},
  rules,
  children,
  ...restProps
}) => {
  const theme = useTheme();
  const context = useFormContext() || {};
  const { errors, getValues } = { ...form, ...context };
  const error = _.get(errors, name);

  console.log('getValue:', getValues());
  return (
    <>
      <Controller
        as={<MuiFormGroup {...restProps}>{children}</MuiFormGroup>}
        name={name}
        rules={rules}
        style={{
          marginBottom: theme.spacing(0.5),
          borderRadius: theme.shape.borderRadius,
          border: !!error ? `1px solid ${theme.palette.error.main}` : ''
        }}
        onChange={() => getFormGroupValues(getValues(), name)}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default CheckboxGroup;
