import React from 'react';
import { convertToRaw } from 'draft-js';
import _ from 'lodash';
import { useFormContext, Controller, UseFormMethods, ValidationRules } from 'react-hook-form';
import MuiRTE from 'mui-rte';
import { FormFieldError } from 'components';

interface IMarkdownEditor {
  /** Registered field name in useForm */
  name: string;
  placeholder: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
}

const MarkdownEditor: React.FC<IMarkdownEditor> = ({
  name,
  form = {},
  placeholder,
  ...restProps
}) => {
  const context = useFormContext() || {};
  const { control, errors } = { ...form, ...context };
  const error = _.get(errors, name);
  // const register = form.register || formContext.register;
  // const setValue = form.setValue || formContext.setValue;
  // const getValue = form.getValue || formContext.getValues;
  // const control = form.control || formContext.control;

  console.log('error:', error);
  // const [defaultValue, setDefaultValue] = React.useState('');

  // React.useEffect(() => {
  //   register(name);
  //   setDefaultValue(getValue(name));
  // }, [register]);

  return (
    <>
      <Controller
        // as={MuiRTE}
        name={name}
        control={control}
        label={placeholder}
        // onChange={([value]: any) => {
        //   const content = JSON.stringify(convertToRaw(value.getCurrentContent()));
        //   console.log('content:', convertToRaw(value.getCurrentContent()));
        //   if (convertToRaw(value.getCurrentContent()).blocks.every(el => el.text === '')) return '';
        //   return content;
        // }}
        render={({ onChange, ...props }) => (
          <MuiRTE
            onChange={([value]: any) => {
              console.log('value:', value);
              const content = JSON.stringify(convertToRaw(value.getCurrentContent()));
              console.log('content:', convertToRaw(value.getCurrentContent()));
              if (convertToRaw(value.getCurrentContent()).blocks.every(el => el.text === ''))
                return '';
              return content;
            }}
          />
        )}
        {...restProps}
      />

      <FormFieldError error={error} />
    </>
  );

  // return (
  //   <MuiRTE
  //     toolbarButtonSize="small"
  //     inlineToolbar
  //     ref={register({ required: true })}
  //     label={restProps.placeholder}
  //     defaultValue={defaultValue}
  //     error={error}
  //     onChange={value => {
  //       const content = JSON.stringify(convertToRaw(value.getCurrentContent()));

  //       setValue(name, content);
  //     }}
  //     {...restProps}
  //   />
  // );

  // // const [state, setState] = React.useState('');

  // // console.log('state:', state);

  // // const description = watch('description');

  // // console.log('description:', description);
  // // console.log('getValues:', getValues());

  // // const handleChange = ([editorState]) => {
  // //   const contentState = editorState.getCurrentContent();
  // //   // console.log('data:', editorState.getCurrentContent());
  // //   // console.log('content state', convertToRaw(contentState));
  // //   // console.log('data:', JSON.stringify(convertToRaw(contentState)));
  // //   // contextSetValue && contextSetValue('description', JSON.stringify(convertToRaw(contentState)));
  // //   // contextSetValue('description', 'hi');
  // //   setValue && setValue('description2', 'test');
  // //   // contextSetValue && contextSetValue('description2', 'value');
  // // };

  // // React.useEffect(() => {
  // //   const description = getValues().description;
  // //   contextSetValue('description._immutable', 'hi');
  // //   // console.log(
  // //   //   'description in markdown:',
  // //   //   EditorState.createWithContent(convertFromRaw(JSON.parse(description)))
  // //   // );
  // // }, []);

  // // const set = setValue || contextSetValue;

  // // return (
  // //   <MuiRTE
  // //     // defaultValue={state}
  // //     onChange={([editorState]) => {
  // //       const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

  // //       setValue && setValue('description', content);
  // //       contextSetValue && contextSetValue('description', content);
  // //     }}
  // //   />
  // // );

  // return (
  //   <>
  //     <Controller
  //       as={MuiRTE}
  //       name={name}
  //       onSave={data => {
  //         console.log('data:', data);
  //       }}
  //       // onChange={_.debounce(handleChange, 1000)}
  //       // onChange={handleChange}
  //       onChange={([editorState]) => {
  //         const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

  //         setValue && setValue('description', content);
  //         contextSetValue && contextSetValue('description', content);
  //       }}
  //       valueName="editorState"
  //       control={control || contextControl}
  //       // defaultValue={}
  //       error={error}
  //       inlineToolbar
  //       label={restProps.placeholder}
  //       {...restProps}
  //     />

  //     <FormFieldError error={error} />
  //   </>
  // );
};

export default MarkdownEditor;
