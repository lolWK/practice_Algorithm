function solution(my_string) {
  var answer = 0;

  const regex = /[^0-9]/g;
  const result = my_string.match(/\d+/g);

  if (!result) return answer;

  for (num of result) {
    answer += Number(num);
  }

  return answer;
}

solution('aAb1B2cC34oOp');
solution('aa');
