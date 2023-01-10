function solution(s) {
  let answer = '';
  for (s of s) {
    answer += s.toUpperCase();
    console.log(answer);
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
