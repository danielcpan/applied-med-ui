import React from 'react';
import { Grid, Tooltip, Typography, Checkbox } from '@material-ui/core';
import { History as HistoryIcon } from '@material-ui/icons';
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon
} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const uniq = (data: any) => {
  const options = data.reduce((acc: any, el: any) => {
    if (acc.has(el.value)) return acc;

    acc.set(el.value, el);
    return acc;
  }, new Map());

  return Array.from(options.values());
};

export const renderOptionWithSuggestion = (option: any) => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>
      {option.isSuggestion ? (
        <Typography style={{ color: '#52188c', fontWeight: 500 }}>{option.label}</Typography>
      ) : (
        <Typography>{option.label}</Typography>
      )}
    </Grid>

    {option.isSuggestion && (
      <Grid item>
        <Tooltip title="Recent Search">
          <HistoryIcon />
        </Tooltip>
      </Grid>
    )}
  </Grid>
);

export const renderMultiOption = (option: any, { selected }: any) => (
  <Grid container alignItems="center">
    <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    {option.isSuggestion ? (
      <Typography style={{ color: '#52188c', fontWeight: 500 }}>{option.label}</Typography>
    ) : (
      <Typography>{option.label}</Typography>
    )}
  </Grid>
);

export const renderMultiOptionWithSuggestion = (option: any, { selected }: any) => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>{renderMultiOption(option, { selected })}</Grid>

    {option.isSuggestion && (
      <Grid item>
        <Tooltip title="Recent Search">
          <HistoryIcon />
        </Tooltip>
      </Grid>
    )}
  </Grid>
);

export const renderOption = ({ disableSuggestions, mulitple }: any) => (
  option: any,
  { selected }: any
) => {
  if (mulitple)
    return (
      <>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option.label}
      </>
    );

  if (disableSuggestions) return option.label;

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        {option.isSuggestion ? (
          <Typography style={{ color: '#52188c', fontWeight: 500 }}>{option.label}</Typography>
        ) : (
          <Typography>{option.label}</Typography>
        )}
      </Grid>

      {option.isSuggestion && (
        <Grid item>
          <Tooltip title="Recent Search">
            <HistoryIcon />
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
};

export const getSuggestions = ({
  disableSuggestions = false,
  suggestionsLimit = 3,
  input = '',
  name = ''
}) => {
  if (disableSuggestions) return [];

  const item = localStorage.getItem('autocomplete-suggestions');
  const suggestions = item ? JSON.parse(item)[name] : [];

  console.log('suggestions:', suggestions);
  console.log('input:', input);

  if (!suggestions) return [];

  return suggestions
    .filter((el: any) => el.label.toLowerCase().includes(input.toLowerCase()))
    .slice(0, suggestionsLimit) as Array<any>;
};

export const getPrevSuggestions = () => {
  const item = localStorage.getItem('autocomplete-suggestions');

  return item ? JSON.parse(item) : {};
};

const suggestionsCache = () => {
  const item = localStorage.getItem('autocomplete-suggestions');

  return item ? JSON.parse(item) : {};
};

export const updateSuggestions = (key: string, data: any) => {
  if (!data || !key) return;

  console.log('data:', data);

  const cache = suggestionsCache();
  let updatedCache = {};

  if (Array.isArray(data)) {
    const suggestions = data.map(el => ({ ...el, isSuggestion: true }));
    updatedCache = {
      ...cache,
      [key]: cache[key] ? uniq([...cache[key], ...suggestions]) : suggestions
    };
  } else {
    const suggestion = { ...data, isSuggestion: true };
    updatedCache = {
      ...cache,
      [key]: cache[key] ? uniq([...cache[key], ...suggestion]) : [suggestion]
    };
  }

  console.log('updatedCache:', updatedCache);

  localStorage.setItem('autocomplete-suggestions', JSON.stringify(updatedCache));
};
