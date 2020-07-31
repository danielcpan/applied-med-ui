import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';
import { SwitchProps } from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const StyledSwitch = withStyles(theme => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    overflow: 'visible'
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(20px)',
      color: theme.palette.background.paper,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 10,
    opacity: 1,
    backgroundColor: theme.palette.background.paper
  },
  checked: {}
}))(MuiSwitch);

const SwitchBase: React.FC<SwitchProps> = props => <StyledSwitch {...props} />;

export default SwitchBase;
