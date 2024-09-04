import React from 'react';
import ErrorBoundary from './ErrorBoundary';

// A component that might throw an error
const ProblematicComponent: React.FC = () => {
  throw new Error('This is a test error!');
  return <div>This will not be rendered.</div>;
};

const ErrorBoundaryInAction: React.FC = () => {
  return (
    <div className='bg-slate-300/80 p-8 border rounded-md'>
      <h1>App with Error Boundary</h1>
      
      {/* Error Boundary wraps the problematic component */}
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
      
      {/* Other components */}
      <p>Other parts of the app will continue to work even if the above component fails.</p>
    </div>
  );
};

export default ErrorBoundaryInAction;
