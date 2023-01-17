function solution(array, n) {
  return array.sort().sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
}

function solution(array, n) {
  var arr = array.sort((a, b) => a - b).map(v => Math.abs(v - n));
  return array[arr.indexOf(Math.min(...arr))];
}

solution([10, 11, 12, 14], 13);
