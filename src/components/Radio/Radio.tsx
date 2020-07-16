import React from 'react';
import {
  Typography,
  FormControlLabel as MuiFormControlLabel,
  Radio as MuiRadio
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

interface IRadio {
  value: string;
  label: string;
  description?: string;
}

const Radio: React.FC<IRadio> = ({ value, label, description }) => (
  <FormControlLabel
    value={`${value}`}
    control={<MuiRadio color="primary" />}
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
    // style={{ marginLeft: 0, alignItems: 'flex-start' }}
  />
);

export default Radio;
