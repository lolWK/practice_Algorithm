function solution(score) {
  var answer = [];
  let avg = score.map(v => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);

  return avg.map(v => sorted.indexOf(v) + 1);
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
