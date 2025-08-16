import { formatCurrency } from '../../scripts/utils/money.js';
/* THESE ARE AUTOMATED TESTING 
-Solves manual labor burden of trying many tests
-Solves re-testing after code modification
*/
console.log('test suite: formatCurrency'); //test suite= group of test cases

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  // test case
  // basic test case
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  // test case
  // edge test case
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  // test case
  console.log('passed');
} else {
  console.log('failed');
}
