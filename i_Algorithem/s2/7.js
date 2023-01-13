function solution(arr) {
  let answer = 0;
  let n = arr.length; // 5
  // 바깥쪽은 0 이라서 볼 필요 없음
  let dx = [-1, 0, 1, 0]; // 12시 3시 6시 9시
  let dy = [0, 1, 0, -1]; // 12시 3시 6시 9시

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 봉우리 확인
      for (let k = 0; k < 4; k++) {
        // 4방향이라서 4번돌도록 맞춤
        let nx = i + dx[k]; // 가려는 행좌표
        let ny = j + dy[k]; // 가려는 열좌표

        // arr[nx][ny]상하좌우좌표 >= 현재지점좌표 arr[i][j]
        // nx>=0 && nx<n && ny>=0 && ny<n는
        // 내 상하좌우가 네방향으로 존재하지 않는 경우도 있으니 그 경우는 제외하는 조건
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++; // 상하좌우 다 돌고 나와서 flag가 그대로이면 answer++ 해준다
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
