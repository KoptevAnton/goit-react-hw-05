// import s from "./ErrorMessage.module.css";

import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = ({ error }) => {
  const hasShownError = useRef(false);
  
  useEffect(() => {
    if (error && !hasShownError.current) {
      toast.error(error);
      hasShownError.current = true; 
    }
  }, [error]);
  return <Toaster/>
}

export default ErrorMessage