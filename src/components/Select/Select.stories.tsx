import React from 'react';
import _ from 'lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Select from './Select';
import AsyncSelectComp from './AsyncSelect';
import { mapOptions } from 'utils/general.utils';

export default {
  title: 'FormFields/Select',
  component: Select,
  subcomponents: { FormField, FormFieldError },
  parameters: {
    componentSubtitle: 'Select component based on react-select'
  }
};

const options = mapOptions([
  { id: 1, displayValue: 'Daniel Pan' },
  { id: 2, displayValue: 'William Huang' },
  { id: 3, displayValue: 'Randy Dang' }
]);

export const Default = () => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Name" description="I'm a description">
        <Select form={form} name="name" options={options} rules={{ required: 'Required' }} />
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button type="submit">Submit</button>
    </form>
  );
};

export const WithFormContext = () => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Name" description="I'm a description">
          <Select name="name" options={options} rules={{ required: 'Required' }} />
        </FormField>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </FormProvider>
  );
};

const mockFetchUsers = ({ success, timeout = 1000 }): any => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve(options) : reject({ message: 'Error' });
    }, timeout);
  });
};

const loadOptions = (input, callback) => {
  (async () => {
    const data = await mockFetchUsers({ success: true });

    callback(data);
  })();
};

export const AsyncSelect = () => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Name" description="I'm a description">
        <AsyncSelectComp
          form={form}
          name="name"
          loadOptions={_.debounce(loadOptions, 400)}
          rules={{ required: 'Required' }}
        />
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button type="submit">Submit</button>
    </form>
  );
};
