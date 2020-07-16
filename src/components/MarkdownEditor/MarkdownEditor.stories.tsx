import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField, FormFieldError } from 'components';
import MarkdownEditor from './MarkdownEditor';

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
            required: 'Required',
            maxLength: { value: 10, message: 'Exceeded max length!' },
            minLength: { value: 5, message: 'Too short!' }
          }}
          placeholder="Enter name here"
        />
      </FormField>
      <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
    </form>
  );
};

// export const WithFormContext = () => {
//   const form = useForm({ defaultValues: { name: '' } });

//   return (
//     <FormProvider {...form}>
//       <form
//         onSubmit={form.handleSubmit(data => {
//           alert(JSON.stringify(data));
//         })}
//       >
//         <FormField label="Name" description="I'm a description">
//           <MarkdownEditor
//             name="name"
//             rules={{ required: 'Required' }}
//             placeholder="Enter name here"
//           />
//         </FormField>
//       </form>
//       <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
//     </FormProvider>
//   );
// };

// export const TextArea = () => {
//   const form = useForm({ defaultValues: { details: '' } });

//   return (
//     <form
//       onSubmit={form.handleSubmit(data => {
//         alert(JSON.stringify(data));
//       })}
//     >
//       <FormField label="Details" description="I'm a description">
//         <MarkdownEditor
//           form={form}
//           name="details"
//           rules={{ required: 'Required' }}
//           placeholder="Provide any additional details. Be as specific as possible"
//           multiline
//           rows={4}
//           rowsMax={4}
//         />
//       </FormField>
//       <pre>{JSON.stringify({ values: { ...form.watch() }, ...form.formState }, null, 2)}</pre>
//     </form>
//   );
// };
