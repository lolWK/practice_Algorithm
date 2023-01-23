function solution(n) {
  var answer = 0;
  const str = n + '';

  for (n of str) {
    answer += Number(n);
  }
  console.log(answer);
  return answer;
}

solution(1234);
