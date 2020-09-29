import React from 'react';
import {
  Loading as DefaultLoading,
  ServerError as DefaultServerError,
  LoadingOverlay as DefaultFetching,
  ErrorBoundary
} from 'components';
import {
  getHookVals,
  getComponentIsLoading,
  getComponentIsFetching,
  getComponentHasError,
  getComponentHasData
} from './Async.helpers';
import { getErrors } from 'utils/react-query.utils';
import { flexRender } from 'utils/general.utils';

interface IAsyncDefaultComponents {
  Loading: React.ReactNode | string;
  Fetching: React.ReactNode | string;
  Error: React.ReactNode | string;
  NoData: React.ReactNode | string;
}

interface IAsync {
  /** Computes queries state */
  queries?: any;
  /** Computes mutations state */
  mutations?: any;
  isLoading?: boolean | (() => boolean);
  /** Useful as background fetch indicator */
  isFetching?: boolean | (() => boolean);
  hasError?: boolean | (() => boolean);
  hasData?: boolean | (() => boolean);
  /** Disable fetching indicator when not needed. Disabled by default */
  showFetching?: boolean;
  /** Injectable custom components: Loading, Fetching, Error, and NoData */
  components?: IAsyncDefaultComponents;
  children: (props: any) => React.ReactNode;
}

/**
 * Uses `react-query` to automatically compute states when supplied
 * a query or mutation. Fail safe as states are wrapped with an ErrorBoundary
 */
const Async: React.FC<IAsync> = ({
  queries = {},
  mutations = {},
  isLoading,
  isFetching,
  hasError,
  hasData,
  showFetching = false,
  components: {
    Loading = DefaultLoading,
    Fetching = DefaultFetching,
    Error = DefaultServerError,
    NoData = <div>No Data!</div>
  } = {},
  children
}) => {
  const { queryVals, hookVals } = getHookVals({ queries, mutations });

  if (getComponentIsLoading({ hookVals, isLoading })) {
    return (
      <ErrorBoundary fallback={Error}>
        {flexRender(Loading, { queries, mutations, children })}
      </ErrorBoundary>
    );
  }

  if ((showFetching || isFetching) && getComponentIsFetching({ hookVals, isFetching })) {
    return (
      <ErrorBoundary fallback={Error}>
        {flexRender(Fetching, { queries, mutations, children })}
      </ErrorBoundary>
    );
  }

  if (getComponentHasError({ hookVals, hasError })) {
    return (
      <ErrorBoundary fallback={Error}>
        {flexRender(Error, { queries, mutations, errors: getErrors(hookVals), children })}
      </ErrorBoundary>
    );
  }

  if (!getComponentHasData({ hookVals: queryVals, hasData })) {
    return (
      <ErrorBoundary fallback={Error}>
        {flexRender(NoData, { queries, mutations, children })}
      </ErrorBoundary>
    );
  }

  return <ErrorBoundary fallback={Error}>{children({ queries, mutations })}</ErrorBoundary>;
};

export default Async;
