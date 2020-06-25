import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    border: 'none',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.teal.digital5,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.teal.digital70,
      color: theme.palette.common.white
    },
    '&:active': {
      backgroundColor: theme.palette.teal.digital70,
      color: theme.palette.common.white
    },
    '&:disabled': {
      color: theme.palette.grey.disabledBtnText,
      backgroundColor: theme.palette.grey.disabledButton
    }
  }
}));

const Button = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MuiButton {...props} classes={{ root: classes.root }}>
      {children}
    </MuiButton>
  );
};

export default Button;
