function solution(my_string, num1, num2) {
  let str = [...my_string];
  var answer = [...my_string];

  answer[num1] = str[num2];
  answer[num2] = str[num1];

  return answer.join('');
}

solution('hello', 1, 2);
