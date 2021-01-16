import React, { useMemo } from 'react';
import _ from 'lodash';
import { useQuery, queryCache } from 'react-query';
import { useForm, useWatch } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';
import AutocompleteBase from './AutocompleteBase';
import { Input } from '../Input';
import { renderOption, uniq } from './Autocomplete.utils';
import { suggestionCache } from './SuggestionsCache';

const AsyncAutocompleteBase: React.FC<any> = ({
  name,
  onChange,
  queryFn,
  defaultOptions,
  disableSuggestions = false,
  suggestionsLimit = 3,
  ...restProps
}) => {
  const inputForm = useForm();
  const inputName = useMemo(() => `async-autocomplete-${name}`, [name]);
  const input = useWatch({ control: inputForm.control, name: inputName, defaultValue: '' });

  const optionsQuery = useQuery<any, any>([inputName, input], queryFn, {
    onSuccess: data => {
      const prevData = (queryCache.getQueryData(inputName) as Array<any>) || [];
      queryCache.setQueryData(inputName, uniq([...prevData, ...data]));
    },
    queryFnParamsFilter: args => args.slice(1),
    enabled: false
  });

  const options = useMemo(() => {
    const cachedOptions = (queryCache.getQueryData(inputName) as Array<any>) || [];
    const suggestions = suggestionCache.getSuggestionData(name) || [];

    console.log('got suggestions:', suggestions);

    if (!optionsQuery.data && !cachedOptions) return uniq([...suggestions, ...defaultOptions]);

    if (!optionsQuery.data && cachedOptions) return uniq([...suggestions, ...cachedOptions]);

    return uniq([...suggestions, ...cachedOptions, ...optionsQuery.data]);
  }, [optionsQuery.data, defaultOptions]);

  return (
    <AutocompleteBase
      // renderOption={renderOption({ disableSuggestions })}
      renderInput={(params: any) => (
        <Input
          name={inputName}
          form={inputForm}
          error={optionsQuery.isError}
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {optionsQuery.isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
      options={options}
      loading={optionsQuery.isLoading && !optionsQuery.data}
      onChange={(e: any, data: any) => {
        suggestionCache.setSuggestionData(name, data);

        return onChange(data);
      }}
      onInputChange={_.debounce((e, newInput) => {
        if (newInput.length > 1) optionsQuery.refetch();
      }, 400)}
      noOptionsQueryText={
        optionsQuery.isError ? 'Oops! Something went wrong. Please try again later.' : 'No Options'
      }
      {...restProps}
    />
  );
};

export default AsyncAutocompleteBase;
