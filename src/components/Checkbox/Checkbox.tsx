import React, { useMemo } from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Typography,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox
} from '@material-ui/core';
import { FormFieldError, FieldProps } from 'components';
import { withStyles } from '@material-ui/core/styles';

const FormControlLabel = withStyles({
  root: {
    display: 'flex'
  },
  formControlLabel: {
    paddingTop: 9
  }
})(MuiFormControlLabel);

type CheckBoxProps = FieldProps & {
  label: string;
  description?: string;
};

const Checkbox: React.FC<CheckBoxProps> = ({ name, form, label, description, ...restProps }) => {
  const context = useFormContext();
  const { control, errors } = useMemo(() => ({ ...form, ...context }), []);
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={
          <FormControlLabel
            control={<MuiCheckbox color="primary" {...restProps} />}
            label={
              <>
                <Typography>{label}</Typography>
                {description && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontStyle: 'italic', fontWeight: 300 }}
                  >
                    {description}
                  </Typography>
                )}
              </>
            }
          />
        }
        name={name}
        control={control}
        style={{ marginLeft: 0, alignItems: 'flex-start' }}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Checkbox;
