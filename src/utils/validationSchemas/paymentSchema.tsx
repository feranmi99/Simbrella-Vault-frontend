import { string, object } from 'yup';

export const paymentFormValidationSchema = object().shape({
  cardHolderName: string()
    .required('Card Holder Name is required')
    .min(3, 'Must be at least 3 characters'),
});
