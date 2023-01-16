function solution(strlist) {
  var answer = [];

  for (strlist of strlist) {
    const length = strlist.length;
    answer.push(length);
  }
  return answer;
}

// function solution(strlist) {
//   return strlist.map((el) => el.length)
// }

solution(['We', 'are', 'the', 'world!']);
