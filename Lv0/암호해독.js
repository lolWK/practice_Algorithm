function solution(cipher, code) {
  let arr = [];

  for (let i = 1; i <= cipher.length / code; i++) {
    arr.push(cipher[code * i - 1]);
  }
  return arr.join('');
}

function solution(cipher, code) {
  var answer = '';
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
solution('dfjardstddetckdaccccdegk', 4);
