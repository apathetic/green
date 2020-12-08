import { sanitizeDecimal } from './i18n';


describe('i18n.js', () => {
  describe('sanitizeDecimal', () => {
    it('restricts characters to numbers and a decimal separator', () => {
      expect(sanitizeDecimal('1w234.56a', '.')).toBe('1234.56');
    });

    it('enables a custom decimal separator', () => {
      expect(sanitizeDecimal('1.23b4,56a', ',')).toBe('1234,56');
      expect(sanitizeDecimal('12.34', ',')).toBe('1234');
    });

    it('supports negative values', () => {
      expect(sanitizeDecimal('-12.34', '.')).toBe('-12.34');
    });

    it('supports explicitly positive values', () => {
      expect(sanitizeDecimal('+12.34', '.')).toBe('+12.34');
    });
  });
});
