import React from "react";
import _ from "lodash";
import { Controller } from "react-hook-form";
import { Typography, TextField as MuiTextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";

type InputProps = TextFieldProps & {
  name: string;
  form: any;
  rules?: any;
};

const Input: React.FC<InputProps> = ({
  name,
  form: { control, errors },
  ...restProps
}) => {
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={MuiTextField}
        name={name}
        control={control}
        variant="outlined"
        type="text"
        size="small"
        margin="dense"
        fullWidth
        error={_.get(errors, name)}
        {...restProps}
      />

      <Typography variant="body2" style={{ color: "red" }}>
        {error?.message}
      </Typography>
    </>
  );
};

export default Input;
