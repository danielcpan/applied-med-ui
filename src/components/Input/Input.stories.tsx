import React from 'react';
import { useForm } from 'react-hook-form';
import { FormField } from 'components';
import Input from './Input';

export default {
  title: 'Input',
  component: Input
};

export const Default = () => {
  const form = useForm();

  return (
    <FormField label="Name">
      <Input
        form={form}
        name="name"
        rules={{ required: 'Required' }}
        placeholder="Enter name here"
      />
    </FormField>
  );
};

// export const WithForm = () => {
//   const form = useForm();

//   return (
//     <FormField label="Name">
//       <Input
//         form={form}
//         name="name"
//         rules={{ required: 'Required' }}
//         placeholder="Enter name here"
//       />
//     </FormField>
//   );
// };
