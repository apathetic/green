import getSymbolFromCurrency from 'currency-symbol-map';
import { locale } from '@/locale';

export const decimalSeparator = getLocaleDecimalSeparator(locale);
export const currencySymbol = getSymbolFromCurrency('USD');
export const currency = {
  default: 'USD',
  position: getLocaleSymbolPosition(),
  symbol: currencySymbol,
};


/**
 * A helper function for obtaining the current decimal separator
 * @param {string} locale The locale used to determine the separator.
 * @returns {string} Decimal separator ('.', ',')
 */
function getLocaleDecimalSeparator(locale) {
  return (1.1).toLocaleString(locale).replace(/\d/g, '');
}


/**
 * A helper function for obtaining symbol position relative to a value
 * This should be fine going forward unless we get into RTL, or Arabic.
 * @param {string} type the type of symbol
 */
export function getLocaleSymbolPosition({ type = 'currency' } = {}) {
  return (
    (type === 'percent' && percent(1).indexOf('%') === 0) ||
    (type === 'currency' && money(1).indexOf(currencySymbol) === 0) ?
      'prepend' : 'append'
  );
}


/**
 * Format a value as a decimal in a locale-aware format.
 * NOTE: Be careful as this returns a string and should not be used for
 * additional calculation unless converted.
 * @param {number|string} value number to format
 * @param {number} [decimalPlaces] number of decimal places
 * @return {string} locale-aware number as a string
 */
export function decimal(value, decimalPlaces) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    style: 'decimal',
  })
    .format(value);
}


/**
 * Format a value as a money string in a locale-aware format.
 * @param {number} object.amount The number to format
 * @param {string} [object.currency] ISO 4217 currency code (USD, CAD, EUR, etc)
 * @return {string} locale-aware money value as a string
 */
export function money({ amount, currency = 'USD' }) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  })
    .format(amount);
}


/**
 * Format a value as a percent in a locale-aware format.
 * @param {number|string} value number to format
 * @param {number} [decimalPlaces] number of decimal places
 * @return {string} locale-aware percentage value as a string
 */
export function percent(value, decimalPlaces) {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces || 2,
  }).format(value);
}


/**
 * Cleans a value to reflect type=number restrictions.
 * Omits exponents, and restricts the decimal separator.
 * @param {number|string} value value to format
 * @param {string} value decimal separator
 */
export function sanitizeDecimal(value, separator = '.') {
  const replace = `[^0-9${separator}+-]*`;
  const re = new RegExp(replace, 'g');

  return `${value}`.replace(re, '');
}


/**
 * Replace decimal separator of `value` with `convertTo`
 * @param {string} value
 * @param {string} convertTo decimal character to update the value with
 */
export function convertDecimal(value, convertTo = '.') {
  return `${value}`.replace(convertTo === '.' ? ',' : '.', convertTo);
}
