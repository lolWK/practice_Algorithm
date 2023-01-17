function solution(my_string) {
  var answer = [];

  for (v of my_string) {
    if (v === v.toUpperCase()) {
      answer.push(v.toLowerCase());
    }
    if (v !== v.toUpperCase()) {
      answer.push(v.toUpperCase());
    }
  }

  return answer.join('');
}

solution('abCdEfghIJ');
