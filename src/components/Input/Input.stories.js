import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

export default {
  title: 'Input',
  component: Input
};

export const Basic = () => {
  const form = useForm();

  return <Input form={form} name="basic" />;
};
