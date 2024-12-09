import { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
  const hasShownError = useRef(false);

  useEffect(() => {
    if (error && !hasShownError.current) {
      toast.error(error);
      hasShownError.current = true;
    }
  }, [error]);
  return (
    <Toaster
      toastOptions={{
        className: 'errorMessage',
        style: {
          border: '1px solid #FF5733',
          padding: '4px 8px',
          color: '#FF5733',
        },
      }}
    />
  );
};

export default ErrorMessage;
