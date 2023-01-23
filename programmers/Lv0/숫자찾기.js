function solution(num, k) {
  let a = (num + '').split('');
  let b = k + '';
  let idx = a.findIndex(v => v === b) + 1;

  if (idx === 0) return idx - 1;

  return idx;
}
solution(29183, 5);

// sting.indexOf
