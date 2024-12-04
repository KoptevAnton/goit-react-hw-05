// import s from "./ErrorMessage.module.css";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = ({ error }) => {
  useEffect(() => {
    toast.error(error);
  }, [error]);
  return <Toaster/>
}

export default ErrorMessage