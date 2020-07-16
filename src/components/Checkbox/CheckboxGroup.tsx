// import React, { useEffect } from 'react';
// import _ from 'lodash';
// import { Controller, useFormContext } from 'react-hook-form';
// import { FormGroup as MuiFormGroup, Checkbox } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
// import { FormFieldError, FieldProps } from 'components';
// import { getFormGroupValues } from 'utils/react-hook-form.utils';

// const CheckboxGroup: React.FC<FieldProps> = ({ name, form = {}, rules, children }) => {
//   const theme = useTheme();
//   const context = useFormContext() || {};
//   const { errors, control, watch, trigger } = { ...form, ...context };
//   const error = _.get(errors, name);
//   const newErr = Object.keys(error || {})?.[0] || undefined;

//   console.log('errors:', error);
//   console.log('f:', newErr);
//   // const watch2 = watch(name);
//   // trigger(name);
//   // console.log('watch:', watch2);

//   // useEffect(() => {
//   //   console.log('in effect');
//   //   (async () => {
//   //     // console.log('triggering!');
//   //     const result = await trigger(name);
//   //     console.log('validation result:', result);
//   //   })();
//   //   // console.log('hey:');
//   //   // const x = await trigger(name);
//   // }, [watch2]);

//   return (
//     <>
//       {/* Fake Input needed to trigger validation */}
//       <Controller
//         as={Checkbox}
//         name={name}
//         control={control}
//         rules={rules}
//         style={{ display: 'none' }}
//       />
//       <div
//         style={{
//           marginBottom: theme.spacing(0.5),
//           padding: theme.spacing(0, 1),
//           borderRadius: theme.shape.borderRadius,
//           border: !!newErr ? `1px solid ${theme.palette.error.main}` : ''
//         }}
//       >
//         {children}
//       </div>

//       <FormFieldError error={newErr} />
//     </>
//   );
// };

// export default CheckboxGroup;
