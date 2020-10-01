import { getIsLoading, getIsFetching, getHasError, getHasData } from '../../utils/react-query.utils';
import { isFunction } from '../../utils/general.utils';

type TGetHookVals = {
  queries: any;
  mutations: any;
}

export const getHookVals = ({ queries, mutations }: TGetHookVals) => {
  const queryVals = Object.values(queries);
  const mutationVals = Object.values(mutations);
  const hookVals = [...queryVals, ...mutationVals];

  return { hookVals, queryVals, mutationVals };
};

type TGetComponentState = {
  isLoading?: boolean | (() => boolean) | any;
  isFetching?: boolean | (() => boolean) | any;
  hasError?: boolean | (() => boolean) | any;
  hasData?: boolean | (() => boolean) | any;
  hookVals: any;
}

export const getComponentIsLoading = ({ isLoading, hookVals }: TGetComponentState) => {
  if (isLoading !== undefined) {
    return (isFunction(isLoading) && isLoading()) || isLoading;
  }

  return getIsLoading(hookVals);
};
export const getComponentIsFetching = ({ isFetching, hookVals }: TGetComponentState) => {
  if (isFetching !== undefined) {
    return (isFunction(isFetching) && isFetching()) || isFetching;
  }

  return getIsFetching(hookVals);
};
export const getComponentHasError = ({ hasError, hookVals }: TGetComponentState) => {
  if (hasError !== undefined) {
    return (isFunction(hasError) && hasError()) || hasError;
  }

  return getHasError(hookVals);
};

export const getComponentHasData = ({ hasData, hookVals }: TGetComponentState) => {
  if (hasData !== undefined) {
    return (isFunction(hasData) && hasData()) || hasData;
  }

  return getHasData(hookVals);
};
