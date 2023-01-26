function solution(polynomial) {
  const polynomialArr = polynomial.split(' + ');
  let linear = 0;
  let constant = 0;

  polynomialArr.forEach(el => {
    const num = parseInt(el);
    if (el.includes('x')) {
      linear += Number.isInteger(num) ? num : 1;
    } else {
      constant += num;
    }
  });

  let answer = '';
  if (linear !== 0) answer = linear === 1 ? 'x' : `${linear}x`;
  if (constant !== 0) answer += answer === '' ? constant : ` + ${constant}`;
  return answer;
}
solution('3x + 7 + x');
