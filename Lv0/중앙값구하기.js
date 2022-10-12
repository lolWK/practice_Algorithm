// 들어오는 배열 숫자순으로 정렬
// 전체 배열 길이 / 2
function solution(array) {
  let arr = array.sort((a, b) => a - b);
  let n = Math.floor(arr.length / 2);
  return arr[n];
}

// 다른사람 풀이
const solution = array => array.sort((a, b) => a - b).at(Math.floor(array.length / 2));

function solution(array) {
  return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
}

function solution(array) {
  array.sort((a, b) => a - b);
  return array[~~(array.length / 2)];
}
