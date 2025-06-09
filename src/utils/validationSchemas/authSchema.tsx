import { string, object, boolean } from 'yup';
import {
  defaultValidation,
  emailValidation,
  passwordValidation,
  phoneNumberValidation,
} from '.';

export const loginFormValidationSchema = object().shape({
  emailOrPhone: emailValidation(),
  password: string().required('Password is required'),
});

export const registerFormValidationSchema = object().shape({
  first_name: defaultValidation('First Name'),
  last_name: defaultValidation('Last Name'),
  email: emailValidation(),
  phone: phoneNumberValidation(),
  password: passwordValidation(),
  hasAcceptedTandC: boolean().oneOf([true], 'This field is required'),
});

export const forgotPasswordFormValidationSchema = object().shape({
  email: emailValidation(),
});

export const resetPasswordFormValidationSchema = object().shape({
  password: passwordValidation(),
  confirmPassword: string()
    .test(
      'password-match',
      'Password and Confirm Password must match',
      function (value?: string) {
        return this.parent.password === value;
      }
    )
    .required('Confirm Password is required'),
});
