function solution(s) {
  let answer = '';
  answer = s.replace(/A/g, '#');
  console.log(answer);
  return answer;
}

let str = 'BANANA';
console.log(solution(str));

// function solution(s) {
//   let answer = '';

//   for (let x of s) {
//     if (x === 'A') answer += '#';
//     else answer += x;
//   }

//   return answer;
// }
