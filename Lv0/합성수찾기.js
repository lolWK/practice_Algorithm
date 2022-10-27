// 다시풀기
function solution(n) {
  const isComposit = num => {
    let count = 2;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (isComposit(i)) count += 1;
  }
  return count;
}

//
const solution = n => (n < 4 ? 0 : count(n));

const isCompositeNo = (n, i = 2, divisor = 1) => {
  if (divisor >= 2) {
    return true;
  } else if (i > Math.sqrt(n)) {
    return false;
  }
  return isCompositeNo(n, i + 1, divisor + (n % i === 0 ? 1 : 0));
};

const count = (n, i = 4, acc = 0) => {
  if (i > n) {
    return acc;
  }
  return count(n, i + 1, acc + (isCompositeNo(i) ? 1 : 0));
};
