import { getHookVals } from 'components/Async/Async.utils';

const getStatus = (isLoading: boolean, hasError: boolean, isSuccess: boolean) => {
  if (isLoading) return 'loading';
  else if (hasError) return 'error';
  else if (isSuccess) return 'success';
  else return 'idle';
};

type TUseAsync = {
  /** Computes queries state */
  queries?: any;
  /** Computes mutations state */
  mutations?: any;
  onError?: (props: any) => void;
  onSuccess?: (props: any) => void;
  onSettled?: (props: any) => void;
};

/**
 * Uses `react-query` to automatically compute states when supplied
 * a query or mutation. Fail safe as states are wrapped with an ErrorBoundary
 */
const useAsync = ({
  queries = {},
  mutations = {},
  onError,
  onSuccess,
  onSettled
}: TUseAsync = {}) => {
  const { hookVals } = getHookVals({ queries, mutations });

  const isLoading = hookVals.some((el: any) => el.isLoading);
  const isFetching = hookVals.some((el: any) => el.isFetching);
  const hasError = hookVals.some((el: any) => el.isError);
  const isSuccess = hookVals.every((el: any) => el.isSuccess);
  const hasSettled = !isLoading && !isFetching;
  const status = getStatus(isLoading, hasError, isSuccess);

  hasError && onError && onError({ queries, mutations });
  isSuccess && onSuccess && onSuccess({ queries, mutations });
  hasSettled && onSettled && onSettled({ queries, mutations });

  return { isLoading, isFetching, hasError, isSuccess, hasSettled, status };
};

export default useAsync;
