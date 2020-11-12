export const getIsLoading = (hook: any): boolean => {
  if (Array.isArray(hook)) {
    return hook.some(el => el.status === 'loading');
  }

  return hook.status === 'loading';
};

export const getIsFetching = (hook: any): boolean => {
  if (Array.isArray(hook)) {
    return hook.some(el => el.isFetching);
  }

  return hook.isFetching;
};

export const getHasError = (hook: any): boolean => {
  if (Array.isArray(hook)) {
    return hook.some(el => el.error);
  }

  return !!hook.error;
};

export const getHasData = (hook: any): boolean => {
  if (Array.isArray(hook)) {
    return hook.every(el => (Array.isArray(el.data) ? el.data.length > 0 : !!el.data));
  }

  return Array.isArray(hook.data) ? hook.data.length > 0 : !!hook.data;
};

export const getErrors = (hook: any): unknown => {
  if (Array.isArray(hook)) {
    return hook.reduce((acc, el) => {
      if (el.error) acc.push(el.error);
      return acc;
    }, []);
  }

  return hook.error;
};
