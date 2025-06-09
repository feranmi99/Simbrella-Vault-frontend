import { object, string } from 'yup';
import {
  defaultValidation,
  emailValidation,
  passwordValidation,
  phoneNumberValidation,
  urlValidation,
} from '.';

export const updateAccountSchema = object().shape({
  firstName: defaultValidation('First name'),
  lastName: defaultValidation('Last name'),
  email: emailValidation(),
  phoneNumber: phoneNumberValidation(),
  linkedInUrl: urlValidation('linkedin Profile'),
  residentialAddress: defaultValidation('Residential Address'),
});

export const passwordSettingSchema = object().shape({
  oldPassword: defaultValidation('Old Password'),
  password: passwordValidation('password'),
  confirmPassword: string()
    .test('password-match', 'Password and Confirm Password must match', function (
      value?: string
    ) {
      return this.parent.password === value;
    })
    .required('Confirm Password is required'),
});
