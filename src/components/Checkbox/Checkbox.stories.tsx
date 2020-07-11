import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { getFormGroupValues } from 'utils/react-hook-form.utils';

export default {
  title: 'FormFields/Checkbox',
  component: Checkbox,
  subcomponents: { FormField, FormFieldError },
  parameters: {
    componentSubtitle: 'Generic Checkbox Component'
  }
};

export const Default = () => {
  const form = useForm({ defaultValues: { hasAgreement: false } });

  console.log('form.watch():', form.watch());

  return (
    <form
      onSubmit={form.handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <Checkbox
        form={form}
        name="hasAgreement"
        label="Terms of Agreement"
        description="You agree to all terms and conditions"
      />
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button
        onClick={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        Submit
      </button>
    </form>
  );
};

export const WithFormContext = () => {
  const form = useForm({ defaultValues: { hasAgreement: false } });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <Checkbox
          name="hasAgreement"
          label="Terms of Agreement"
          description="You agree to all terms and conditions"
        />
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </FormProvider>
  );
};

export const WithCheckboxGroup = () => {
  const form = useForm({
    // defaultValues: { favoriteColors: { red: false, green: false, blue: false } }
    defaultValues: {
      justifications: { feasibilityStudy: false, equipment: false, area: false, other: false }
    }
  });
  // const options = [
  //   { name: 'red', label: 'Red' },
  //   { name: 'green', label: 'Green' },
  //   { name: 'blue', label: 'Blue' }
  // ];

  const options = [
    { name: 'feasibilityStudy', label: 'Feasibility Study' },
    { name: 'equipment', label: 'Transfer/Move/Addition of Equipment' },
    { name: 'area', label: 'Area or Room Restoration/Reconfiguration/Addition' },
    { name: 'other', label: 'Other' }
  ];

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <FormField label="Justification">
          {/* {options.map(el => (
            <Checkbox key={el.name} name={`justifications[${el.name}]`} label={el.label} />
          ))} */}
          <CheckboxGroup
            name="justifications"
            rules={{
              validate: () => {
                const groupValues = getFormGroupValues(form.getValues(), 'justifications');
                console.log('groupal:', groupValues);
                return !!Object.values(groupValues).some(el => !!el) || 'Required';
              }
            }}
          >
            {options.map(el => (
              <Checkbox key={el.name} name={`justifications[${el.name}]`} label={el.label} />
            ))}
          </CheckboxGroup>
        </FormField>
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>

      <button
        onClick={form.handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        Submit
      </button>
    </FormProvider>
  );
};
