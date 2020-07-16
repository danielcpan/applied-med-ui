import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'FormFields/Radio',
  component: Radio,
  subcomponents: { RadioGroup, FormField, FormFieldError },
  parameters: {
    componentSubtitle: 'Generic Boolean Input Component'
  }
};

const options = ['Chocolate', 'Vanilla', 'Strawberry'];

export const Default = () => <Radio value="someValue" label="I'm a Radio Button!" />;

export const WithRadioGroup = () => {
  const form = useForm({ defaultValues: { favoriteIceCream: '' } });

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <FormField label="Favorite Ice Cream" description="Which common ice cream is your favorite?">
        <RadioGroup form={form} name="favoriteIceCream">
          {options.map(el => (
            <Radio key={el} value={el} label={el} />
          ))}
        </RadioGroup>
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </form>
  );
};

export const RadioGroupWithFormContext = () => {
  const form = useForm({ defaultValues: { favoriteIceCream: '' } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField
          label="Favorite Ice Cream"
          description="Which common ice cream is your favorite?"
        >
          <RadioGroup name="favoriteIceCream">
            {options.map(el => (
              <Radio key={el} value={el} label={el} />
            ))}
          </RadioGroup>
        </FormField>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </FormProvider>
  );
};
