function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let split = quiz[i].split(' ');

    if (split[1] === '-') {
      if (Number(split[0]) - Number(split[2]) === Number(split[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
    if (split[1] === '+') {
      if (Number(split[0]) + Number(split[2]) === Number(split[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
    console.log(answer);
  }

  return answer;
}

solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2']);
