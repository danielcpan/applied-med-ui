import React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import { FormGroup as MuiFormGroup } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { FormFieldError, FieldProps } from 'components';
import { getFormGroupValues } from 'utils/react-hook-form.utils';

const CheckboxGroup: React.FC<FieldProps> = ({ name, form = {}, rules, children }) => {
  const theme = useTheme();
  const context = useFormContext() || {};
  const { errors, getValues, setValue, watch } = { ...form, ...context };
  const error = _.get(errors, name);

  const groupValues = watch(name);

  React.useEffect(() => {
    // console.log(errors?.message);
    console.log('rules:', rules);
    console.log('doing something!:', groupValues);
  }, [groupValues]);

  // console.log('watch:', watch(name));
  return <>{children}</>;
  // console.log('getValue:', getValues());
  return (
    <>
      <Controller
        as={<MuiFormGroup>{children}</MuiFormGroup>}
        name={name}
        rules={rules}
        // onChange={() => getFormGroupValues(getValues(), name)}
        // onChange={(e: any) => {
        //   console.log('e:', e);
        // }}
        style={{
          marginBottom: theme.spacing(0.5),
          borderRadius: theme.shape.borderRadius,
          border: !!error ? `1px solid ${theme.palette.error.main}` : ''
        }}
        // render={props => (
        //   <MuiFormGroup
        //     onChange={() => {
        //       console.log('change:', getValues());
        //       return props.onChange();
        //       // const val = getFormGroupValues(getValues()[name], name);
        //       // console.log('val:', val);
        //       // setValue(name, getFormGroupValues(getValues(), name));
        //     }}
        //     // onChange={e => {
        //     //   console.log('chnge:', getValues());
        //     //   // console.log('e:', e);
        //     //   // return props.o /nChange(e.target.checked);
        //     // }}
        //   >
        //     {children}
        //   </MuiFormGroup>
        // )}
      />

      <FormFieldError error={error} />
    </>
  );
};

export default CheckboxGroup;
