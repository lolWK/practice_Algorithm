function solution(my_string, n) {
  let text = my_string;
  let split = text.split("");
  let longText = [];

  for (letter of split) {
    longText.push(letter.repeat(n));
  }

  return longText.join("");
}

// etc
function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}
