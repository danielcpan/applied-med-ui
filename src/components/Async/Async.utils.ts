import { getIsLoading, getIsFetching, getHasError, getHasData } from 'utils/react-query.utils';

const isFunction = fnToCheck => {
  return fnToCheck && {}.toString.call(fnToCheck) === '[object Function]';
};

export const getHookVals = ({ queries, mutations }) => {
  const queryVals = Object.values(queries);
  const mutationVals = Object.values(mutations);
  const hookVals = [...queryVals, ...mutationVals];

  return { hookVals, queryVals, mutationVals, hookVals };
};

export const getComponentIsLoading = ({ isLoading, hookVals }) => {
  if (isLoading !== undefined) {
    return (isFunction(isLoading) && isLoading()) || isLoading;
  }

  return getIsLoading(hookVals);
};
export const getComponentIsFetching = ({ isFetching, hookVals }) => {
  if (isFetching !== undefined) {
    return (isFunction(isFetching) && isFetching()) || isFetching;
  }

  return getIsFetching(hookVals);
};
export const getComponentHasError = ({ hasError, hookVals }) => {
  if (hasError !== undefined) {
    return (isFunction(hasError) && hasError()) || hasError;
  }

  return getHasError(hookVals);
};

export const getComponentHasData = ({ hasData, hookVals }) => {
  if (hasData !== undefined) {
    return (isFunction(hasData) && hasData()) || hasData;
  }

  return getHasData(hookVals);
};
