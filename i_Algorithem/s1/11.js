// function solution(s) {
//   // 영어 대문자 찾기  /[A-Z]/g
//   let answer = s.match(/[A-Z]/g).length;
//   return answer;
// }

function solution(s) {
  let answer = 0;
  for (let x of s) {
    // if(x ===x.toUpperCase()) answer ++ 방법2
    let num = x.charCodeAt(); // 방법3
    if (num >= 65 && num <= 90) answer++; // 65~90이 아스키 코드 대문자
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
