import { string } from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const defaultValidation = (name: string) => string().required(`${name} is required`);

export const optionValidation = (msg?: string) => string().required(msg || 'Select an option');

export const urlValidation = (name: string) =>
  string()
    .matches(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      'Enter valid url!'
    )
    .required(`${name} is required`);

export const emailValidation = () =>
  string().email('Invalid email address').required('Email address is required');

export const passwordValidation = (path = 'password') =>
  string()
    .required('Password is required')
    .min(8, 'Password must not be less than 8 characters')
    .test({
      test: function (value: any) {
        return !/(?=.*[$&+,:;=?@#|'<>.^*()%!-])/.test(value)
          ? this.createError({
              message: 'Password must contain at least one special character',
              path,
            })
          : true;
      },
    })
    .test({
      test: function (value: any) {
        return !/(?=.*?[A-Z])/.test(value)
          ? this.createError({
              message: 'Password must contain at least upper case letter',
              path,
            })
          : true;
      },
    })
    .test({
      test: function (value: any) {
        return !/(?=.*[0-9])/.test(value)
          ? this.createError({
              message: 'Password must contain at least one number',
              path,
            })
          : true;
      },
    });

export const phoneNumberValidation = () =>
  string()
    .test('phone-number-validate', 'Enter a valid phone number', function (value?: string) {
      if (!value) return false;

      return isValidPhoneNumber(value);
    })
    .required('Phone Number is required');
