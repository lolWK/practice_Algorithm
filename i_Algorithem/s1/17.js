function solution(s) {
  let answer;
  const set = new Set(s);
  const newArr = [...set];

  answer = newArr;
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
