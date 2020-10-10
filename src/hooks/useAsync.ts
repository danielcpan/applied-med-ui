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
  onLoading: (props: any) => void;
  onFetching: (props: any) => void;
  onError: (props: any) => void;
  onSuccess: (props: any) => void;
  onSettled: (props: any) => void;
};

/**
 * Uses `react-query` to automatically compute states when supplied
 * a query or mutation. Fail safe as states are wrapped with an ErrorBoundary
 */
const useAsync = ({
  queries = {},
  mutations = {},
  onLoading,
  onFetching,
  onError,
  onSuccess,
  onSettled
}: TUseAsync) => {
  const { hookVals } = getHookVals({ queries, mutations });

  const isLoading = hookVals.some((el: any) => el.isLoading);
  const isFetching = hookVals.some((el: any) => el.isFetching);
  const hasError = hookVals.some((el: any) => el.isError);
  const isSuccess = hookVals.every((el: any) => el.isSuccess);
  const hasSettled = !isLoading && !isFetching;
  const status = getStatus(isLoading, hasError, isSuccess);

  isLoading && onLoading && onLoading({ queries, mutations });
  isFetching && onFetching && onFetching({ queries, mutations });
  hasError && onError && onError({ queries, mutations });
  isSuccess && onSuccess && onSuccess({ queries, mutations });
  hasSettled && onSettled({ queries, mutations });

  return { status, isLoading, isFetching, isError: hasError, isSuccess };
};

export default useAsync;
