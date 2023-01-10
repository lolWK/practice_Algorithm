function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER; // 초기화

  for (let str of s) {
    if (str.length > max) {
      max = str.length;
      answer = str;
    }
  }

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
