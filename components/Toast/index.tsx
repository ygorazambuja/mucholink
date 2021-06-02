import { toast, ToastOptions } from "react-toastify";
import { TOAST_ERROR, TOAST_SUCCESS, TOAST_WARNING } from "../../constants";

interface ToastProps {
  status?: string;
  message: string;
}

const defaultToastProps: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default function Toast({ status, message }: ToastProps) {
  if (status === TOAST_SUCCESS) {
    return toast.success(message, {
      ...defaultToastProps,
    });
  }
  if (status === TOAST_WARNING) {
    return toast.warning(message, {
      ...defaultToastProps,
    });
  }
  if (status === TOAST_ERROR) {
    return toast.error(message, {
      ...defaultToastProps,
    });
  }
}
