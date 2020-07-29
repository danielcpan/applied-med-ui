import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import MarkdownEditor, { getContentLength } from './MarkdownEditor';

export default {
  title: 'FormFields/MarkdownEditor',
  component: MarkdownEditor,
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
        <MarkdownEditor
          form={form}
          name="name"
          rules={{
            required: { value: true, message: 'Required' },
            validate: value => {
              const length = getContentLength(JSON.parse(value));
              const maxLength = 100;

              return length < maxLength || 'Exceeded max length of 100!';
            }
          }}
          placeholder="Enter name here"
        />
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
          <MarkdownEditor
            name="name"
            rules={{
              required: { value: true, message: 'Required' },
              validate: value => {
                const length = getContentLength(JSON.parse(value));
                const maxLength = 100;

                return length < maxLength || 'Exceeded max length of 100!';
              }
            }}
            placeholder="Enter name here"
          />
        </FormField>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button type="submit">Submit</button>
    </FormProvider>
  );
};
