
export type IUser = {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  lastLogin?: string;
  phone: string;
  referralCode?: string;
  role: string;
};

export interface Profile {
  userId: string;
  country: string;
  age: string;
  industry: string;
  role: string;
  preferredHouseLocation: string;
  houseType: number;
  numberOfRooms: number;
  ownershipGoal: string;
  paymentUrgency: string;
  monthlyIncomeRange: string;
  haveRsa: boolean;
  expectedRsaBalance: number;
  haveSavings: boolean;
  initialDeposit: number;
  monthlySavings: number;
}

export interface VerifyEmailFormPayload {
  code: string;
  email: string;
}

export interface ResendTokenPayload {
  email: string;
}

export interface ChangePasswordFormPayload {
  oldPassword: string;
  password: string;
}