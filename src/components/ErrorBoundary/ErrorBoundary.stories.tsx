import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    componentSubtitle: 'Catches Children Errors'
  }
};

export const Default = () => {
  const user = {};
  // try {
  //   return user.address.street;
  // } catch (err) {
  //   return 'this work?';
  // }
  return (
    <div>
      <ErrorBoundary fallback={<div>ErrorBoundary caught this!</div>}>
        {user.address.street}
      </ErrorBoundary>
    </div>
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
//           <ErrorBoundary
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
//         <ErrorBoundary
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
