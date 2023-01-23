function solution(n, numlist) {
  var answer = [];

  for (num of numlist) {
    if (num % n === 0) {
      answer.push(num);
    }
  }
  return answer;
}

solution(12, [2, 100, 120, 600, 12, 12]);

// filter
