// function solution(s, t) {
//   let answer = 0;

//   for (x of s) {
//     if (x === t) {
//       answer++;
//     }
//     console.log(answer);
//   }

//   return answer;
// }

function solution(s, t) {
  let answer = s.split(t).length;

  return answer - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
