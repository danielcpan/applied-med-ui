import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

interface IFormFieldError {
  error?: Error;
}

/**
 * Form field helper component that displays field error
 */
const FormFieldError: React.FC<IFormFieldError> = ({ error = {} }) => {
  const theme = useTheme();

  return (
    <Typography variant="body2" style={{ color: theme.palette.error.main }}>
      {error.message}
    </Typography>
  );
};

export default FormFieldError;
