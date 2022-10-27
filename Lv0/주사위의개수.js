function solution(box, n) {
  let answer = 1;

  for (let i = 0; i < box.length; i++) {
    let count = Math.trunc(box[i] / n);
    answer *= count;
  }

  return answer;
}

// etc
function solution(box, n) {
  let [width, length, height] = box;

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}
