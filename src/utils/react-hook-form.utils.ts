import _ from 'lodash';

export const getFormGroupValues = (formValues: any, name: string) => {
  const groupEntries = Object.entries(formValues).filter(
    ([key]) => key.includes(name) && key !== name
  );

  const values = groupEntries.reduce<any>((acc, [key, val]) => {
    _.set(acc, key, val);
    return acc;
  }, {})[name];

  return values;
};
