function solution(numbers) {
  let answer = 0;
  for (num of numbers) {
    answer += num;
  }
  return answer / numbers.length;
}

// else
function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}
