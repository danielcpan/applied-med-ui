import React, { useEffect } from 'react';
import { convertToRaw } from 'draft-js';
import _ from 'lodash';
import { useFormContext, UseFormMethods, ValidationRules } from 'react-hook-form';
import MuiRTE from 'mui-rte';
import { FormFieldError } from 'components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import MUIRichTextEditor from '../../';
// import { TAutocompleteItem } from '../../src/components/Autocomplete';

const Staff = (props: any) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar
          style={{
            backgroundColor: props.color
          }}
        >
          {props.name.substr(0, 1)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.job} />
    </>
  );
};

const emojis = [
  {
    keys: ['face', 'grin'],
    value: '😀',
    content: '😀'
  },
  {
    keys: ['face', 'beaming'],
    value: '😁',
    content: '😁'
  },
  {
    keys: ['face', 'joy'],
    value: '😂',
    content: '😂'
  },
  {
    keys: ['face', 'grin', 'big'],
    value: '😃',
    content: '😃'
  },
  {
    keys: ['face', 'grin', 'smile'],
    value: '😄',
    content: '😄'
  },
  {
    keys: ['face', 'sweat'],
    value: '😅',
    content: '😅'
  }
];

const cities = [
  {
    keys: ['mexico'],
    value: 'Mexico City',
    content: 'Mexico City'
  },
  {
    keys: ['mexico', 'beach'],
    value: 'Cancun',
    content: 'Cancun'
  },
  {
    keys: ['japan', 'olympics'],
    value: 'Tokyo',
    content: 'Tokyo'
  },
  {
    keys: ['japan'],
    value: 'Osaka',
    content: 'Osaka'
  }
];

const staff = [
  {
    keys: ['all', 'foo', 'manager'],
    value: 'Foo Bar',
    content: <Staff name="Foo Bar" job="Manager" color="tomato" />
  },
  {
    keys: ['all', 'bar', 'support'],
    value: 'Bar Foo',
    content: <Staff name="Bar Foo" job="Technical Support" color="orange" />
  },
  {
    keys: ['all', 'mui', 'manager'],
    value: 'Mui Rte',
    content: <Staff name="Mui Rte" job="Manager" color="dodgerblue" />
  }
];

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      // root: {
      //   margin: '8px 0px 4px'
      // },
      container: {
        border: '1px solid #c4c4c4',
        borderRadius: 4,
        margin: '8px 0px 4px'
        // display: 'flex',
        // flexDirection: 'column-reverse'
      },
      editorContainer: {
        width: 'inherit',
        // height: 110,
        maxHeight: 110,
        overflowY: 'auto',
        padding: 0,
        margin: '10.5px 14px'
      },
      editor: {
        // height: 100,
        // maxHeight: 100
        // backgroundColor: '#ebebeb',
        // padding: '20px',
        // height: '100%',
        // maxHeight: '200px',
        // overflow: 'auto'
      },
      toolbar: {
        // borderTop: '1px solid gray'
        // backgroundColor: '#ebebeb'
      },
      placeHolder: {
        // backgroundColor: '#ebebeb',
        // paddingLeft: 20,
        // width: 'inherit',
        position: 'inherit'
        // top: '20px'
      }
      // anchorLink: {
      //   color: '#333333',
      //   textDecoration: 'underline'
      // }
    }
  }
});

interface IMarkdownEditor {
  /** Registered field name in useForm */
  name: string;
  placeholder: string;
  /** Optional if using FormContext */
  form?: UseFormMethods<any>;
  /** Validations rules */
  rules?: ValidationRules;
}

const isContentEmpty = (content: any) => {
  return content.blocks.every((el: any) => el.text === '');
};

const MarkdownEditor: React.FC<IMarkdownEditor> = ({
  name,
  form = {},
  placeholder,
  rules,
  ...restProps
}) => {
  const context = useFormContext() || {};
  const { register, errors, setValue, getValues } = { ...form, ...context };
  const error = _.get(errors, name);

  // console.log('error:', error);

  useEffect(() => {
    register({ name }, rules);
  }, [register]);

  return (
    <>
      <MuiThemeProvider theme={defaultTheme}>
        <MuiRTE
          toolbarButtonSize="small"
          controls={[]}
          inlineToolbar
          label={placeholder}
          onChange={data => {
            const content = convertToRaw(data.getCurrentContent());
            const value = isContentEmpty(content) ? '' : JSON.stringify(content);

            setValue(name, value, { shouldValidate: true });
          }}
          defaultValue={getValues()[name]}
          // error={error}
          autocomplete={{
            strategies: [
              {
                items: emojis,
                triggerChar: ':'
              },
              {
                items: cities,
                triggerChar: '/'
              },
              {
                items: staff,
                triggerChar: '@',
                insertSpaceAfter: false
              }
            ]
          }}
          {...restProps}
        />
      </MuiThemeProvider>

      <FormFieldError error={error} />
    </>
  );
};

export default MarkdownEditor;
