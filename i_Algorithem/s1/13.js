function solution(s) {
  let answer = '';
  for (s of s) {
    if (s === s.toUpperCase()) answer += s.toLowerCase();
    if (s === s.toLowerCase()) answer += s.toUpperCase();
    console.log(answer);
  }
  return answer;
}

console.log(solution('StuDY'));
