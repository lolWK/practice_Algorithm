function solution(s) {
  let answer = s.split('');
  let idx = 1;

  for (let i = 0; i < answer.length; i++) {
    if (idx % 2 === 0) answer[i] = answer[i].toLowerCase();
    if (idx % 2 === 1) answer[i] = answer[i].toUpperCase();
    idx++;

    if (answer[i] === ' ') idx = 1;
  }
  return answer.join('');
}
solution('try hello world');
