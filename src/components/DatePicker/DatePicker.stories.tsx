import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import DatePicker from './DatePicker';

export default {
  title: 'FormFields/DatePicker',
  component: DatePicker,
  subcomponents: { FormField, FormFieldError },
  parameters: {
    componentSubtitle: 'Generic Date Input Component'
  }
};

export const Default = () => {
  const form = useForm({ defaultValues: { birthday: new Date() } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Birthday">
        <DatePicker form={form} name="birthday" rules={{ required: 'Required' }} />
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </form>
  );
};

export const WithFormContext = () => {
  const form = useForm({ defaultValues: { birthday: new Date() } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Birthday" description="When were you born?">
          <DatePicker form={form} name="birthday" rules={{ required: 'Required' }} />
        </FormField>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </FormProvider>
  );
};
