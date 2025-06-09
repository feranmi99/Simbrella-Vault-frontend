export function calculateMonthlyPayments(
  downPayment: number,
  retirementSavings: number,
  monthlySavings: number,
  propertyPrices: number[],
  savingsInterestRate: number
) {
  // Initialize variables
  let years = 0;
  let totalPrice = 0;

  // Iterate over property prices to find the year and corresponding property price
  for (let i = 0; i < propertyPrices.length; i++) {
    totalPrice = propertyPrices[i];
    // Calculate the total savings with interest at the end of each year
    const totalSavingsWithInterest =
      downPayment +
      retirementSavings * 0.25 +
      (monthlySavings * 12 * (i + 1) * ((1 + savingsInterestRate / 100) ** (i + 1) - 1)) /
        (savingsInterestRate / 100);
    // Check if the customer can afford the property with the given savings
    if (totalPrice <= totalSavingsWithInterest) {
      years = i + 1;
      break;
    }
  }

  // If the customer cannot afford the property with the given savings
  if (years === 0) {
    // Calculate the maximum affordable monthly savings, call it the proposed monthly savings
    const proposedMonthlySavings =
      ((totalPrice - downPayment - retirementSavings * 0.25) * (savingsInterestRate / 100)) /
      (12 * 20 * (((1 + savingsInterestRate / 100) ** 20 - 1) / (savingsInterestRate / 100)));
    return {
      years: 20,
      months: 12 * 20,
      monthlySavings: proposedMonthlySavings,
      isProposed: true,
    };
  }

  // Calculate the number of months
  const months = years * 12;

  return {
    years: years,
    months: months,
    monthlySavings: monthlySavings,
    isProposed: false,
  };
}

// Example usage:
const downPayment = 50000; // Initial down payment
const retirementSavings = 20000; // Retirement savings balance
const monthlySavings = 1000; // Desired monthly savings amount
const savingsInterestRate = 5; // Savings interest rate in percentage
const propertyPrices = [
  100000, 120000, 140000, 160000, 180000, 200000, 220000, 240000, 260000, 280000, 300000,
  320000, 340000, 360000, 380000, 400000, 420000, 440000, 460000, 480000,
]; // Property prices for the next 20 years

const result = calculateMonthlyPayments(
  downPayment,
  retirementSavings,
  monthlySavings,
  propertyPrices,
  savingsInterestRate
);

console.log(result);
