import { toast } from 'react-toastify';

export const ErrorHandler = (error: any) => {
  // console.log(error);
  
  //Network error
  if (typeof window !== 'undefined' && !window.navigator.onLine) {
    return { message: 'Network error - you appear to be offline' };
  }

  let message = '';
  let defaultMessage = 'Something went wrong, please try again.';

  if (error?.response) {
    let status = error.response.status;

    if (status >= 500 && status < 600) {
      message = error.response.data.message || defaultMessage;
      toast.error(message);
      return { message, status };
    }

    if (status.toString().startsWith('4')) {
      if (status === 401) {
        localStorage.removeItem('isFirstTimeLogin');
        window.location.href = '/';
        return { message: 'Unauthorized', status };
      } else if (status === 404) {
        message = error.response.data.message;
        return { message, status };
      } else {
        message = error.response.data.message;
        return { message, status };
      }
    }
  } else {
    message = error?.message || defaultMessage;
  }
  return { message };
};

export const unAuthenticatedErrorHandler = (error: any) => {
  const { status, data } = error.response || {};
  let msg = '';
  if (status.toString().startsWith('4')) {
    msg = data?.message;
  } else if (status >= 500 && status < 600) {
    msg = 'Something went wrong, please try again.';
  }
  return msg;
};

export const isHttpNotFound = (error: any) => error?.status?.toString() === '404';
