import React from 'react';
import { Typography, FormControlLabel, Radio as MuiRadio } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControlLabel: {
      paddingTop: 9
    }
  })
);

interface IRadio {
  value: string;
  label: string;
  description?: string;
}

const Radio: React.FC<IRadio> = ({ value, label, description }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      key={value}
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
      style={{ marginLeft: 0, alignItems: 'flex-start' }}
      classes={{ label: classes.formControlLabel }}
    />
  );
};

export default Radio;
