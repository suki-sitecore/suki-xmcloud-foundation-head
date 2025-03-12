import React, { ReactNode, useEffect, useState } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetError = () => {
    setHasError(false);
    setErrorMessage('');
  };

  const handleError = (error: Error) => {
    setHasError(true);
    setErrorMessage(error.message);
    console.log('handle error', error);
  };

  return { hasError, errorMessage, resetError, handleError };
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const { hasError, errorMessage, resetError } = useErrorBoundary();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>{errorMessage}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return <>{children}</>;
};
