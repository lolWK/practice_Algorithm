function solution(s) {
  let answer;
  let length = s.length;
  // 홀수 5일 경우 5/2 버림하기 2,1
  // 짝수 4일 경우 4/2 -1,2
  //

  if (length % 2 === 1) return s.substr(Math.floor(length / 2), 1);
  if (length % 2 === 0) return s.substr(length / 2 - 1, 2);
  // console.log(s.substr(1, 2));
  // console.log(Math.floor(5 / 2));
  return answer;
}
console.log(solution('study'));
// console.log(solution('good'));
