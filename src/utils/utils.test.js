import {
  calcGrossMonthly,
  calcNetMonthly,
  calcIncomeTax,
  calcTax,
} from './utils';

const defaultTaxBrackets = [
  { upper: 40000, lower: 20000, rate: 0.1 },
  { upper: 80000, lower: 40000, rate: 0.2 },
  { upper: 180000, lower: 80000, rate: 0.3 },
  { upper: null, lower: 180000, rate: 0.4 },
];

const increasedTaxBrackets = [
  { upper: 40000, lower: 20000, rate: 0.2 },
  { upper: 80000, lower: 40000, rate: 0.4 },
  { upper: 180000, lower: 80000, rate: 0.6 },
  { upper: null, lower: 180000, rate: 0.8 },
];

describe('Gross Monthly Income Calculation', () => {
  it('should return the value passed divided by 12', () => {
    expect(calcGrossMonthly(12)).toBe(1);
    expect(calcGrossMonthly(25.5)).toBe(2.13);
  });
});

describe('Net Monthly Income Calculation', () => {
  it('should return the gross salary minus tax', () => {
    expect(calcNetMonthly(5000, 500)).toBe(4500);
  });
});

describe('Income Tax Calculation', () => {
  it('should correctly calculate income tax using default tax brackets', () => {
    expect(calcIncomeTax(60000, defaultTaxBrackets)).toBe(500);
    expect(calcIncomeTax(80000, defaultTaxBrackets)).toBe(833.33);
    expect(calcIncomeTax(80001, defaultTaxBrackets)).toBe(833.36);
    expect(calcIncomeTax(100000, defaultTaxBrackets)).toBe(1333.33);
    expect(calcIncomeTax(200000, defaultTaxBrackets)).toBe(4000);
    expect(calcIncomeTax(400000, defaultTaxBrackets)).toBe(10666.67);
  });

  it('should correctly calculate income tax using any tax config passed', () => {
    expect(calcIncomeTax(60000, increasedTaxBrackets)).toBe(1000);
    expect(calcIncomeTax(80000, increasedTaxBrackets)).toBe(1666.67);
    expect(calcIncomeTax(80001, increasedTaxBrackets)).toBe(1666.72);
    expect(calcIncomeTax(100000, increasedTaxBrackets)).toBe(2666.67);
    expect(calcIncomeTax(200000, increasedTaxBrackets)).toBe(8000);
    expect(calcIncomeTax(400000, increasedTaxBrackets)).toBe(21333.33);
  });

  describe('Gross, Tax and Net Monthly Calculation', () => {
    it('should return an object containing gross, tax and net values for a given salary', () => {
      const expected = {
        gross: 5000,
        tax: 500,
        net: 4500,
      };

      expect(calcTax(60000)).toEqual(expected);
    });

    it('should throw an error if salary passed is not a valid number', () => {
      expect(() => calcTax('twelve')).toThrow('Please enter a numeric value.');
    });
  });
});
