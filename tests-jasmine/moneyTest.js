import { formatCurrency } from '../../scripts/utils/money.js';

//describe function is provided by Jasmine and it creates a test suite
describe('test suite: formatCurrency', () => {
  // 'it' is a function that creates a test, the first parameter (String) is the test name
  it('convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});
