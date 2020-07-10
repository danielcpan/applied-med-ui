import React, { useMemo } from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import { FormGroup as MuiFormGroup } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { FormFieldError, FieldProps } from 'components';
import { getFormGroupValues } from 'utils/react-hook-form.utils';

const CheckboxGroup: React.FC<FieldProps> = ({ name, form, children, ...restProps }) => {
  const theme = useTheme();
  const context = useFormContext();
  const { errors, getValues } = useMemo(() => ({ ...form, ...context }), []);
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        name={name}
        as={<MuiFormGroup {...restProps}>{children}</MuiFormGroup>}
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
