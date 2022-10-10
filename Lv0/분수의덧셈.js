// 최대 공약수 (GCD) 사용하기 ,,
// 유클리드 호제법

//최대공약수
function fnGCD(a, b) {
  return a % b === 0 ? b : fnGCD(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num);

  return [denum / gcd, num / gcd];
}
