export const MINIMUMAMOUNTTOPAY = {
  beforeInitialDeposit: 500,
  afterInitialDeposit: 5,
};

export const DLOCALTRANSFEE = {
  local: 1.6,
  international: 4,
};

export const onboardingStage = {
  accountVerification: 'ACCOUNT_VERIFICATION',
  housePreference: 'HOUSE_PREFERENCE',
  kyc: 'KYC',
  personalInformation: 'PERSONAL_INFORMATION',
  completed: 'COMPLETED',
};

export const transactionTypes = { deposit: 'deposit', withdrawal: 'withdrawal' };

export const kycSteps = [
  { label: 'Preference', stage: onboardingStage.housePreference },
  { label: 'KYC', stage: onboardingStage.kyc },
  { label: 'Final Step', stage: onboardingStage.personalInformation },
];

export const kycStatuses = {
  unverified: 'unverified',
  processing: 'processing',
  verified: 'verified',
  rejected: 'rejected',
};

export const dLocalFieldStyle = {
  base: {
    fontSize: '16px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    lineHeight: '18px',
    fontSmoothing: 'antialiased',
    fontWeight: '500',
    color: '#666',
    '::placeholder': {
      color: '#c1c1c1',
    },
    iconColor: '#c1c1c1',
  },
  autofilled: {
    color: '#000000',
  },
};

export const paymentStatuses = {
  success: 'success',
  pending: 'pending',
  fail: 'fail',
};

export const allBadges = [
  {
    image: '/images/badges/happy-savers-img.svg',
    label: 'HAPPY_SAVER',
  },
  {
    image: '/images/badges/starter-img.svg',
    label: 'STARTER',
  },
  {
    image: '/images/badges/half-way-home-img.svg',
    label: 'HALFWAY_HOME',
  },
  {
    image: '/images/badges/dream-catcher-img.svg',
    label: 'DREAM_CATCHER',
  },
  {
    image: '/images/badges/keys-to-castle-img.svg',
    label: 'KEYS_TO_THE_CASTLE',
  },
];

export const happySaverHousePercent = 20;
export const TRADITIONAL_MORTGAGE_INTEREST_RATE = 27;
export const MAXIMUM_REPAYMENT_PERIOD = 15; //years
