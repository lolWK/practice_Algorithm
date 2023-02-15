function timeConversion(s) {
  // 1. 뒤에 AM/PM 잘라낸다
  // 2. AM/PM 확인한다
  // 2.1 AM && 앞에 시간이 12 보다 같거나 클경우 시간 -12
  // 2.2 PM && 앞에 시간이 12 보다 작을 경우 시간 + 12

  const reg = new RegExp(/([PM]|[AM])\w+/, 'g');
  const ampm = s.match(reg)[0];
  const time = s.replace(ampm, '');
  const hour = time.slice(0, 2);

  let change = hour;

  if (ampm === 'AM' && hour >= 12)
    change = String(parseInt(hour) - 12).padStart(2, '0');

  if (ampm === 'PM' && hour < 12)
    change = String(parseInt(hour) + 12).padStart(2, '0');

  console.log(time.replace(hour, change));
  return time.replace(hour, change);
}

timeConversion('07:05:45PM');
timeConversion('12:01:00PM');
timeConversion('12:01:00AM');
