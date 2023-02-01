function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];
  let order = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == one[i % one.length]) count[0]++;

    if (answers[i] == two[i % two.length]) count[1]++;

    if (answers[i] == thr[i % thr.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);

  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) order.push(i + 1);
  }

  return order;
}
solution([1, 2, 3, 4, 5]);
solution([1, 2, 2, 3, 1, 2, 4]);
solution([4, 4, 4, 5, 3]);
solution([5, 5, 3, 1, 1, 2, 2, 4, 4, 1, 3, 1, 1, 2, 2, 4, 4]);
