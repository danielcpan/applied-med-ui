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
    // '&:focus': {
    //   backgroundColor: theme.palette.teal.digital70,
    //   color: theme.palette.common.white
    // },
    // '&:focus:after': {
    //   borderRadius: 4,
    //   padding: 0,
    //   border: '0.5px solid #727678',
    //   position: 'absolute',
    //   content: '""',
    //   top: 2,
    //   left: 2,
    //   bottom: 2,
    //   right: 2
    // },
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
