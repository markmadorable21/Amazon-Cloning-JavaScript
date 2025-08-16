// 15f
export function isWeekend(date) {
  const dateFormat = date.format('dddd');
  if (dateFormat === 'Sunday') return 'Sunday';
  else if (dateFormat === 'Saturday') return 'Saturday';
  else return 'pakyu';
}

// 15g
