import React from 'react';
import _ from 'lodash';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { Typography } from '@material-ui/core';

const animatedComponents = makeAnimated();

interface ISelect {
  name: string;
  options: [];
  form: any;
  rules?: any;
}

const Select: React.FC<ISelect> = ({ name, options, form: { control, errors }, ...restProps }) => {
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={ReactSelect}
        name={name}
        control={control}
        onChange={([selected]) => selected}
        isClearable
        options={options}
        error={error}
        components={animatedComponents}
        styles={{
          control: (provided: any) => ({
            ...provided,
            border: error && '1px solid red'
          })
        }}
        {...restProps}
      />

      <Typography variant="body2" style={{ color: 'red' }}>
        {error?.message}
      </Typography>
    </>
  );
};

export default Select;
