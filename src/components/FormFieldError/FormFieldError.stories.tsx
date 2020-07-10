import React from 'react';
import FormFieldError from './FormFieldError';

export default {
  title: 'FormFieldError',
  component: FormFieldError
};

export const Default = () => <FormFieldError error={new Error('error message here')} />;
