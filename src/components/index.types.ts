import { UseFormMethods, ValidationRules } from 'react-hook-form';

export type FieldProps = {
  /** The different button styles available */
  name: string;
  form?: UseFormMethods<any>;
  rules?: ValidationRules;
};
