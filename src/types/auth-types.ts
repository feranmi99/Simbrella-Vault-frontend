export interface LoginFormPayload {
  email: string;
  password: string;
}

export interface RegisterFormPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  hasAcceptedTandC?: boolean;
  referralCode?: string;
}

export interface ForgotPasswordFormPayload {
  email: string;
}

export interface ResetPasswordFormPayload {
  password: string;
  token?: string;
}
