function solution(str1, str2) {
  var answer = 0;
  console.log(str1.search(str2));

  if (str1.search(str2) === -1) {
    return (answer += 2);
  }
  return (answer += 1);
}

solution('ab6CDE443fgh22iJKlmn1o', '6CD');

// function solution(str1, str2) {
//   return str1.search(str2) !== -1 ? 1 : 2;
// }
