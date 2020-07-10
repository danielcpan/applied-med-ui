import _ from 'lodash';

export const getFormGroupValues = (formValues: any, name: string) => {
  const groupEntries = Object.entries(formValues).filter(
    ([key]) => key.includes(name) && key !== name
  );

  console.log('groupEntries:', groupEntries);

  const values = groupEntries.reduce<any>((acc, [key, val]) => {
    _.set(acc, key, val);
    return acc;
  }, {})[name];

  console.log('values:', values);

  return values;
};
