import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { TTheme } from './types';

const lightThemeConfig: TTheme = {
  palette: {
    primary: {
      main: '#0095A0'
    },
    success: {
      main: '#37D881',
      10: '#EBFBF2'
    },
    error: {
      main: '#CC4A4A',
      70: '#FF8D8D'
    },
    teal: {
      primary: '#0095A0',
      shade: '#004B50',
      digital70: '#4CB5BD',
      digital10: '#E5F4F6',
      digital5: '#F2FAFA'
    },
    grey: {
      dark60: '#373D43',
      primaryDark: '#6C757D',
      medium70: '#727678',
      disabledBtnText: '#A4A4A4',
      primary: '#BFC3C5',
      primaryDark20: '#DEE0E2',
      disabledButton: '#F2F2F2',
      primaryLight10: '#FAFBFB'
    },
    link: {
      bright: '#008BC7',
      dark: '#004D6F'
    },
    toolbar: {
      main: '#001E20'
    }
  },
  props: {
    MuiButton: {
      variant: 'outlined'
    }
  }
};

export const lightTheme = responsiveFontSizes(createMuiTheme(lightThemeConfig));
// TODO: Dark theme?
