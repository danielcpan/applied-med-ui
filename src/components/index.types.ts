import { UseFormMethods, ValidationRules } from 'react-hook-form';

export type FieldProps = {
  name: string;
  form?: UseFormMethods;
  rules?: ValidationRules;
};
