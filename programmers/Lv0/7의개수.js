function solution(array) {
  var answer = 0;

  for (let x of array.join('')) {
    if (x == 7) answer += 1;
  }
  return answer;
}

// solution([7, 77, 17]);
solution([10, 29]);
