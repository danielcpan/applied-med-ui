import React from 'react';
import { Typography } from '@material-ui/core';

type TFormField =  {
  label: string;
  description?: string;
  /** Appends an optional tag to field */
  isOptional?: boolean;
}

/**
 * Wrapper for field input components
 */
const FormField: React.FC<TFormField> = ({ label, description, isOptional, children }) => {
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

      {description && <Typography>{description}</Typography>}
      {children}
    </>
  );
};

export default FormField;
