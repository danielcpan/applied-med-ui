import React from 'react';
import _ from 'lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import Autocomplete from './Autocomplete';
import MultiAutocompleteComp from './MultiAutocomplete';
// import AsyncSelectComp from './AsyncSelect';
import { mapOptions } from 'utils/general.utils';

export default {
  title: 'FormFields/Autocomplete',
  component: Autocomplete,
  subcomponents: { FormField, FormFieldError },
  parameters: {
    componentSubtitle:
      'Autocomplete component Based on material-ui/lab. Suitable alternative to react-select'
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
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button type="submit">Submit</button>
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
      </form>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
      <button type="submit">Submit</button>
    </FormProvider>
  );
};

// const mockFetchUsers = ({ success, timeout = 1000 }): any => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       success ? resolve(options) : reject({ message: 'Error' });
//     }, timeout);
//   });
// };

// const loadOptions = (input, callback) => {
//   (async () => {
//     const data = await mockFetchUsers({ success: true });

//     callback(data);
//   })();
// };

// // export const AsyncSelect = () => {
// //   const form = useForm({ defaultValues: { name: '' } });

// //   return (
// //     <form
// //       onSubmit={form.handleSubmit(data => {
// //         alert(JSON.stringify(data));
// //       })}
// //     >
// //       <FormField label="Name" description="I'm a description">
// //         <AsyncSelectComp
// //           form={form}
// //           name="name"
// //           loadOptions={_.debounce(loadOptions, 400)}
// //           rules={{ required: 'Required' }}
// //         />
// //       </FormField>
// //       <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
// //     </form>
// //   );
// // };
