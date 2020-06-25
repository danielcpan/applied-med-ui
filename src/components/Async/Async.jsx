import React from 'react';
import { Loading as DefaultLoading, ServerError as DefaultServerError } from 'components';
import { getErrors } from 'utils/react-query.utils';
import {
  getHookVals,
  getComponentIsLoading,
  getComponentIsFetching,
  getComponentHasError,
  getComponentHasData
} from './Async.utils';

// Flexible Async HOC to abstract loading, error, and no data states.
// Can explicitly define states or automatically compute them based
// their hook values (use React-Query).
// Good alternative to React Suspense until it is released officially.
const Async = ({
  queries = {},
  mutations = {},
  isLoading,
  isFetching, // Useful as background fetch indicator
  hasError,
  hasData,
  showFetching = false, // Disable fetching indicator when not needed
  // Injectable custom components
  components: {
    Loading = DefaultLoading,
    Fetching = DefaultLoading,
    Error = DefaultServerError,
    NoData = <div>No Data!</div>
  } = {},
  children
}) => {
  const { queryVals, hookVals } = getHookVals({ queries, mutations });

  if (getComponentIsLoading({ hookVals, isLoading })) {
    return <Loading queries={queries} mutations={mutations} />;
  }

  if (showFetching && getComponentIsFetching({ hookVals, isFetching })) {
    return <Fetching queries={queries} mutations={mutations} />;
  }

  if (getComponentHasError({ hookVals, hasError })) {
    return <Error queries={queries} mutations={mutations} errors={getErrors(hookVals)} />;
  }

  if (!getComponentHasData({ hookVals: queryVals, hasData })) {
    return NoData;
  }

  return children({ queries, mutations });
};

export default Async;
