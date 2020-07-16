import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Switch from './Switch';

export default {
  title: 'FormFields/Switch',
  component: Switch,
  subcomponents: { FormField, FormFieldError },
  parameters: {
    componentSubtitle: 'Generic Boolean Input Component'
  }
};

export const Default = () => {
  const form = useForm({ defaultValues: { isLightsOn: false } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Turn the lights on?" description="I'm a description">
        <Switch form={form} name="isLightsOn" />
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </form>
  );
};

export const WithFormContext = () => {
  const form = useForm({ defaultValues: { isLightsOn: false } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Turn the lights on?" description="I'm a description">
          <Switch name="isLightsOn" />
        </FormField>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </FormProvider>
  );
};
