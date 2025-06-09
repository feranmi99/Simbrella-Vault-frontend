import { object, string } from 'yup';
import { defaultValidation, optionValidation, urlValidation } from '.';

export const housePreferenceFormValidationSchema = (validateGoal: boolean = true) =>
  object().shape({
    locationId: optionValidation('Select preferred location'),
    houseId: optionValidation('Select preferred house'),
    apartmentId: optionValidation('Select an apartment type'),
    savingGoal: validateGoal ? optionValidation('Select a reason') : string(),
  });

export const personalInformationFormValidationSchema = object().shape({
  linkedInUrl: urlValidation('linkedinProfile'),
  residentialAddress: defaultValidation('Residential Address'),
});

export const onboardingFormValidationSchema = object().shape({
  country: defaultValidation('Country of residence'),
  age: defaultValidation('Date of birth'),
  industry: defaultValidation('Industry'),
  role: defaultValidation('role'),
  preferredHouseLocation: defaultValidation('Preferred house location'),
  houseType: defaultValidation('House type'),
  ownershipGoal: defaultValidation('Ownership goal'),
  paymentUrgency: defaultValidation('Payment urgency'),
  monthlyIncomeRange: defaultValidation('Monthly income range'),
  monthlySavings: defaultValidation('Monthly savings'),
  haveRsa: defaultValidation('Retirement savings'),
  haveSavings: defaultValidation('Home savings'),
  initialDeposit: defaultValidation('Down payment'),
  numberOfRooms: defaultValidation('Rooms'),
  expectedRsaBalance: defaultValidation('RSA Balance'),
});
