import React, { Component } from 'react';
import { flexRender } from 'utils/general.utils';

interface IErrorBoundary {
  fallback: any;
}

class ErrorBoundary extends Component<IErrorBoundary> {
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
    const { fallback = 'Error!' } = this.props;

    if (this.state.error) {
      return flexRender(fallback, { error: this.state.error });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

interface IWithErrorBoundary {
  children: React.ReactNode;
}
