import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';

const InputBase: React.FC<TextFieldProps> = props => (
  <MuiTextField variant="outlined" type="text" size="small" margin="dense" fullWidth {...props} />
);

export default InputBase;
