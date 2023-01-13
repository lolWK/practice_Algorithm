function solution(arr) {
  let answer = 0,
    cnt = 0; // 누적 점수

  for (x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// 1은 맞췄다 0은 틀렸다
// 연속적으로 맞추면 가산점 붙는다
console.log(solution(arr));
