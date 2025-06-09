import { Wallet } from "@/types";

export const areObjectsEqual = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isObjectEmpty = (obj: Record<string, any>) => {
  if (!obj) return false;
  return Object.entries(obj)?.length === 0;
};

export const formatAmount = (amount?: number | string, widthDecimals = true) => {
  if (!amount) return 0;

  if (!widthDecimals) return amount.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const formatMoneyToNumber = (val: string | number) => {
  if (!val) return 0;

  const rawValue = val.toString().replace(/[^0-9.]/g, '');
  const numericValue = parseFloat(rawValue) || 0;
  return numericValue;
};

export const formatNumberToMoney = (val: number | string) => {
  const formattedValue = Number(val).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return formattedValue;
};

export const formatWordLimit = (word: string, limit = 20) => {
  return word.length > limit ? word.slice(0, limit) + '...' : word;
};


export const getTotalBalance = (wallets: Wallet[]) => 
  wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};