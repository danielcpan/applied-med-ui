import React from 'react';
import { addDecorator } from '@storybook/react';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from '../src/styles';

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={lightTheme}>{storyFn()}</MuiThemeProvider>
  </StylesProvider>
);

addDecorator(StylesDecorator);
