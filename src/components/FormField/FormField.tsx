import React from 'react';
import { Typography } from '@material-ui/core';

interface IFormField {
  label: string | React.ReactNode;
  description?: string;
  isOptional?: boolean;
}

const FormField: React.FC<IFormField> = ({ label, description, isOptional, children }) => {
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

      {description && <Typography paragraph>{description}</Typography>}
      {children}
    </>
  );
};

export default FormField;
