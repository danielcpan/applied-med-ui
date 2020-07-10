import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext, UseFormMethods } from 'react-hook-form';
import {
  Typography,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox
} from '@material-ui/core';
import { FormFieldError } from 'components';
import { withStyles } from '@material-ui/core/styles';

const FormControlLabel = withStyles(theme => ({
  root: {
    display: 'flex'
  },
  label: {
    paddingTop: theme.spacing(1)
  }
}))(MuiFormControlLabel);

type CheckBoxProps = {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Checkbox specific label */
  label: string;
  /** Checkbox specific description */
  description?: string;
};

const Checkbox: React.FC<CheckBoxProps> = ({
  name,
  form = {},
  label,
  description,
  ...restProps
}) => {
  const context = useFormContext() || {};
  const { control, errors } = { ...form, ...context };
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
        type="checkbox"
        name={name}
        control={control}
        style={{ marginLeft: 0, alignItems: 'flex-start' }}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default Checkbox;
