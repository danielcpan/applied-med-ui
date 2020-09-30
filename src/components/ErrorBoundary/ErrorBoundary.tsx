import React, { Component } from 'react';
import { flexRender } from 'utils/general.utils';

type TErrorBoundary = {
  fallback: any;
}

class ErrorBoundary extends Component<TErrorBoundary> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('error shittttt!:', error);
  }

  render() {
    const { error } = this.state;
    const { fallback = 'Error!', children } = this.props;

    return error ? flexRender(fallback, { error }) : children;
  }
}

export default ErrorBoundary;
