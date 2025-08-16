import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { isWeekend as isSatSun } from './isWeekend.js';

// 15a
const today = dayjs();
const fifthDay = today.add(5, 'days');
const formatted5 = fifthDay.format('MMMM D');
console.log(fifthDay);
console.log(formatted5);

// 15b
const month = today.add(30, 'days');
const formattedMonth = month.format('MMMM D');
console.log(formattedMonth);

// 15c
const subtract = today.subtract(30, 'days');
const subtractFormat = subtract.format('MMMM D');
console.log(subtractFormat);

// 15d
const dayFormat = today.format('dddd');
console.log(dayFormat);

// 15e
// function isWeekend(date) {
//   const dateFormat = date.format('dddd');
//   if (dateFormat === 'Sunday') return 'Sunday';
//   else if (dateFormat === 'Saturday') return 'Saturday';
//   else return 'pakyu';
// }

// console.log(isWeekend(today));
// console.log(isWeekend(fifthDay));
// console.log(isWeekend(today.add(1, 'day')));
// console.log(isWeekend(today.add(2, 'day')));

// 15g
console.log(isSatSun(today));
console.log(isSatSun(fifthDay));
console.log(isSatSun(today.add(1, 'day')));
console.log(isSatSun(today.add(2, 'day')));
