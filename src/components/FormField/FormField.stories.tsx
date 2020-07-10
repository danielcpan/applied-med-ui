import React from 'react';
import FormField from './FormField';

export default {
  title: 'FormField',
  component: FormField
};

export const Default = () => (
  <FormField label="Name" description="This is where you enter your name" isOptional></FormField>
);
