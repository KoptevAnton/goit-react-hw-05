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
        className: '{s.error}',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#db441a',
        },
      }}
    />
  );
};

export default ErrorMessage;
