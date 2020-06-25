import React from 'react';
import { Typography } from '@material-ui/core';

interface IFormField {
  label: string | React.ReactNode;
  isOptional?: boolean;
}

const FormField: React.FC<IFormField> = ({ label, isOptional, children }) => {
  return (
    <>
      <Typography gutterBottom style={{ fontWeight: 500 }} component="div">
        {label}
        {isOptional && (
          <Typography
            variant="body2"
            display="inline"
            color="textSecondary"
            style={{ fontStyle: 'italic' }}
          >
            {` *Optional`}
          </Typography>
        )}
      </Typography>
      {children}
    </>
  );
};

export default FormField;
