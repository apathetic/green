/**
 * GreenUI Global Constants.
 * NOTE: as per convention, all constants are written in UPPERCASE.
 */

/**
 * Key Codes
 */
export const KEY_CODES = Object.freeze({
  DOWN: 40,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  SPACE: 32,
  RIGHT: 39,
  UP: 38,
});

/**
 * Date Formats
 */
export const DATE_FORMATS = {
  DEFAULT: 'YYYY-MM-DD hh:mm A',
  MONTH_DAY_YEAR_AT_TIME: 'MMM DD, YYYY @ h:mmA',
  YYYY_MM_DD: 'YYYY-MM-DD',
  YYYY_MM_DD_SLASHES: 'YYYY/MM/DD',
};

/**
 * Timeout for UI/UX effects
 */
export const UI_TIMEOUT = 3000;

/**
 * Debounce used for firing side-effects (tracking, etc)
 */
export const DEBOUNCE = Object.freeze({
  SLOW: 3000,
  FAST: 200,
});
