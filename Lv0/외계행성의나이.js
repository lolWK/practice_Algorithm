function solution(age) {
  let alphabet = "abcdefghij";
  let text = age.toString().split("");
  let answer = text.map(t => alphabet[t]).join("");
  return answer;
}
