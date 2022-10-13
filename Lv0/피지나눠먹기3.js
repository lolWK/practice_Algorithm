function solution(slice, n) {
  if (n % slice === 0) {
    return n / slice;
  } else {
    return Math.floor(n / slice);
  }
}
solution(7, 10);

// else
function solution(slice, n) {
  return Math.ceil(n / slice);
}
