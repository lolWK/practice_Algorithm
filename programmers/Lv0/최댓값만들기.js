function solution(numbers) {
  let answer;
  const sort = numbers.sort((a, b) => a - b);
  answer = sort[sort.length - 1] * sort[sort.length - 2];
  return answer;
}

// etc
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

function solution(numbers) {
  let answer = numbers.sort((a, b) => {
    return b - a;
  });
  return answer[0] * answer[1];
}
