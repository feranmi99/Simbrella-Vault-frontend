import moment from 'moment';

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

export const capitalizeFirstLetter = (word?: string) => {
  return word ? word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1) : '';
};

export const formatSnakeCaseToSentenceCase = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/(^|\s)\S/g, function (match) {
      return match.toUpperCase();
    });
};

export const formatDate = (date: string) => {
  if (!date) return '';
  const parsedDate = moment(date);

  return parsedDate.format('MMMM D, ’YY');
};

export const formatNumberWithCommas = (value: number | string) => {
    const rawValue = value?.toString()?.replace(/[^\d]/g, "");
    return rawValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0;
};

export default formatNumberWithCommas;