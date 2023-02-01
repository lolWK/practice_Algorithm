function solution(array, commands) {
  const answer = [];

  const calculate = (array, c) => {
    const cut = array.slice(c[0] - 1, c[1]).sort((a, b) => a - b);
    const idx = c[2] - 1;
    return cut[idx];
  };

  for (com of commands) answer.push(calculate(array, com));

  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
);
