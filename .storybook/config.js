import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import { lightTheme } from '../src/styles';

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      {storyFn()}
    </MuiThemeProvider>
  </StylesProvider>
);

addDecorator(StylesDecorator);
