import React, { useEffect, useMemo, useReducer } from 'react';
import { convertToRaw } from 'draft-js';
import _ from 'lodash';
import { useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import MuiRTE from 'mui-rte';
import { FormFieldError } from 'components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const defaultStyles = {
  container: {
    border: '1px solid #c4c4c4',
    borderRadius: 4,
    margin: '8px 0px 4px'
  },
  editorContainer: {
    width: 'inherit',
    maxHeight: 110,
    overflowY: 'auto',
    padding: 0,
    margin: '10.5px 14px'
  },
  placeHolder: {
    position: 'inherit'
  }
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_DEFAULT_STYLE':
      return defaultStyles;
    case 'SET_ERROR_STYLE':
      return { ...state, container: { ...state.container, border: '1px solid red' } };
    default:
      throw new Error();
  }
};

const rowToHeight = (row: number) => row * 20 + 10;

type TMarkdownEditor = {
  /** Registered field name in useForm */
  name: string;
  placeholder: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
  rows?: number;
  rowsMax?: number;
}

export const isContentEmpty = (content: any) => {
  return content.blocks.every((el: any) => el.text === '');
};

export const getContentLength = (content: any) => {
  return content.blocks.reduce((acc: number, el: any) => (acc += el.text.length), 0);
};

const MarkdownEditor: React.FC<TMarkdownEditor> = ({
  name,
  form,
  placeholder,
  rules,
  rows = 5,
  rowsMax = 5,
  ...restProps
}) => {
  const [styles, dispatch] = useReducer(reducer, defaultStyles);
  const { register, errors, setValue, getValues, formState } = form || useFormContext();
  const error = errors?.[name];
  const defaultValue = useMemo(() => getValues(name), [name]);

  const theme = useMemo(() => {
    return Object.assign(createMuiTheme(), {
      overrides: {
        MUIRichTextEditor: {
          ...styles,
          editorContainer: {
            ...styles.editorContainer,
            height: rowToHeight(rows),
            maxHeight: rowToHeight(rowsMax)
          }
        }
      }
    });
  }, [styles]);

  useEffect(() => {
    dispatch({ type: !!error ? 'SET_ERROR_STYLE' : 'SET_DEFAULT_STYLE' });
  }, [error]);

  useEffect(() => {
    register({ name }, rules);
  }, [register]);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <MuiRTE
          toolbarButtonSize="small"
          controls={[]}
          inlineToolbar
          label={placeholder}
          onChange={data => {
            const content = convertToRaw(data.getCurrentContent());
            const value = isContentEmpty(content) ? '' : JSON.stringify(content);

            setValue(name, value, {
              shouldDirty: true,
              shouldValidate: formState.dirtyFields.name
            });
          }}
          defaultValue={defaultValue}
          {...restProps}
        />
      </MuiThemeProvider>

      <FormFieldError error={error} />
    </>
  );
};

export default MarkdownEditor;
