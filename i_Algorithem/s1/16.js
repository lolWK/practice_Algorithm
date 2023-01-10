function solution(s) {
  let answer = '';
  const set = new Set(s);
  const newArr = [...set].join('');
  answer += newArr;
  return answer;
}
console.log(solution('ksekkset'));
