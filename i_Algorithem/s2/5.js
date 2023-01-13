function solution(arr) {
  let n = arr.length; // 5
  let answer = Array.from({ length: n }, () => 1); // 1로 초기화 / [1,1,1,1,1]

  // 이중 포문을 돌면서 등수를 구하기 arr[j]>arr[i]
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
