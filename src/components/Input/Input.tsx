import React, { useMemo } from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField as MuiTextField } from '@material-ui/core';
import { FormFieldError, FieldProps } from 'components';

const Input: React.FC<FieldProps> = ({ name, form, rules, ...restProps }) => {
  const context = useFormContext();
  const { control, errors } = useMemo(() => ({ ...form, ...context }), []);
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={
          <MuiTextField
            variant="outlined"
            type="text"
            size="small"
            margin="dense"
            fullWidth
            {...restProps}
          />
        }
        name={name}
        control={control}
        error={error}
        rules={rules}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Input;
