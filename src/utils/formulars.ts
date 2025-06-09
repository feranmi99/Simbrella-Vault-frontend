import { TRADITIONAL_MORTGAGE_INTEREST_RATE } from './constants';

export const calculateSaveTownRepayment = (
  homePrice: number,
  downPaymentRate: number,
  years: number
) => {
  const months = years * 12;
  const r = 5.5 / 100;
  const compoundInterest = homePrice * Math.pow(1 + r, years);
  const totalHomePrice = Number(compoundInterest.toFixed(2));
  const downPayment = homePrice * (downPaymentRate / 100);
  const totalRepayment = downPaymentRate == 100 ? 0 : totalHomePrice - downPayment;
  // this helps display the repayable amount to 0 if the downpayment is 100%.
  const monthlyRepayment = totalRepayment / months;
  return {
    savetownTotalRepayment: totalRepayment.toFixed(2),
    savetownMonthlyRepayment: monthlyRepayment.toFixed(2),
  };
};

export const calculateTraditionalMortgageRepayment = (
  homePrice: number,
  downPaymentRate: number,
  years: number
) => {
  const downPayment = homePrice * (downPaymentRate / 100);

  const principal = homePrice - downPayment;

  const traditionalMortgageTraditionalInterestRate =
    Number(process.env.NEXT_PUBLIC_TRADITIONAL_MORTGAGE_INTEREST_RATE) ||
    TRADITIONAL_MORTGAGE_INTEREST_RATE;

  const monthlyInterestRate = traditionalMortgageTraditionalInterestRate / 12 / 100;
  const months = years * 12;

  const numerator =
    principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
  const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;

  const monthlyPayment = numerator / denominator;
  const totalRepayment = monthlyPayment * months;

  return {
    monthlyTraditionalPayment: monthlyPayment.toFixed(2),
    totalTraditionalRepayment: totalRepayment.toFixed(2),
  };
};
