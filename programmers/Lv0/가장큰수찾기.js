function solution(array) {
  let max = Math.max(...array);
  return [max, array.findIndex(v => v === max)];
}

solution([9, 0, 11, 22, 2, 5]);
