function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// etc
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
