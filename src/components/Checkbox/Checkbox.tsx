import React from 'react';
import { useFormContext, UseFormMethods } from 'react-hook-form';
import {
  Typography,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const FormControlLabel = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'end'
  },
  label: {
    paddingTop: theme.spacing(1)
  }
}))(MuiFormControlLabel);

interface ICheckBox {
  /** Registered field name in useForm */
  name: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Checkbox specific label */
  label: string;
  /** Checkbox specific description */
  description?: string;
}

const Checkbox: React.FC<ICheckBox> = ({ name, form = {}, label, description, ...restProps }) => {
  const context = useFormContext() || {};
  const { register } = { ...form, ...context };

  return (
    <FormControlLabel
      control={<MuiCheckbox inputRef={register} name={name} color="primary" {...restProps} />}
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
  );
};

export default Checkbox;
