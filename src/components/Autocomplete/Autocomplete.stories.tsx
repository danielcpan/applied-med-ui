import React from 'react';
import _ from 'lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Autocomplete from './Autocomplete';
import AsyncAutocompleteComp from './AsyncAutocomplete';
import MultiAutocompleteComp from './MultiAutocomplete';
import MultiAsyncAutocompleteComp from './MultiAsyncAutocomplete';
import { mapOptions } from 'utils/general.utils';

const options = mapOptions([
  { id: 1, displayValue: 'Daniel Pan' },
  { id: 2, displayValue: 'William Huang' },
  { id: 3, displayValue: 'Randy Dang' }
]);

const mockFetchUsers = ({ success, timeout = 1000 }): any => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve(options) : reject({ message: 'Error' });
    }, timeout);
  });
};

const loadOptions = async input => {
  return await mockFetchUsers({ success: true });
};

export default {
  title: 'FormFields/Autocomplete',
  component: Autocomplete,
  subcomponents: { FormField, FormFieldError }
};

export const Default = () => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Name" description="I'm a description">
        <Autocomplete form={form} name="name" options={options} rules={{ required: 'Required' }} />
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
          <Autocomplete name="name" options={options} rules={{ required: 'Required' }} />
        </FormField>
        <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export const MultiAutocomplete = () => {
  const form = useForm({ defaultValues: { name: [] } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Name" description="I'm a description">
          <MultiAutocompleteComp name="name" options={options} rules={{ required: 'Required' }} />
        </FormField>
        <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export const AsyncAutocomplete = () => {
  const form = useForm({ defaultValues: { name: [] } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Name" description="I'm a description">
          <AsyncAutocompleteComp
            name="name"
            loadOptions={loadOptions}
            rules={{ required: 'Required' }}
          />
        </FormField>
        <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export const MultiAsyncAutocomplete = () => {
  const form = useForm({ defaultValues: { name: [] } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Name" description="I'm a description">
          <MultiAsyncAutocompleteComp
            name="name"
            loadOptions={loadOptions}
            rules={{
              validate: value => {
                console.log('value:', value);
                return value || 'Required';
              }
            }}
          />
        </FormField>
        <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
