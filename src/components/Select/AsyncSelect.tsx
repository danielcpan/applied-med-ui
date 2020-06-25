import React from 'react';
import _ from 'lodash';
import { Controller } from 'react-hook-form';
import ReactSelectAsync from 'react-select/async';
import { Typography } from '@material-ui/core';

interface IAsyncSelect {
  name: string;
  loadOptions: (input: any, callback: any) => void;
  form: any;
}

const AsyncSelect: React.FC<IAsyncSelect> = ({
  name,
  loadOptions,
  form: { control, errors },
  ...restProps
}) => {
  const error = _.get(errors, name);

  return (
    <>
      <Controller
        as={ReactSelectAsync}
        name={name}
        control={control}
        onChange={([selected]) => selected}
        isClearable
        cacheOptions
        loadOptions={loadOptions}
        error={error}
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

export default AsyncSelect;
