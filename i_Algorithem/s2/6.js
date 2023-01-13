function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 최대값을 저장해야하니까 가장 작은값으로
  let n = arr.length;

  let sum1 = (sum2 = 0); // sum1 행합 sum2 열합

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n.length; j++) {
      sum1 += a[i][j];
      sum2 += a[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  // 대각선
  sum1 = sum2 = 0; // 초기화
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
