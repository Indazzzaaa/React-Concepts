import React, { Component } from 'react';



class ErrorBoundary extends Component<{children : React.ReactNode}, { hasError: boolean }> {
  constructor(props: {children : React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const {children} = this.props;

    return children;
  }
}

export default ErrorBoundary;
