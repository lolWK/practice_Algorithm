function solution(cards1, cards2, goal) {
  const allC = { c1: cards1, c2: cards2 };

  let turn = 1;

  function play() {
    if (goal.length === 0) return 'Yes';
    const cards = allC[`c${turn}`];

    if (cards[0] === goal[0]) {
      cards.shift();
      goal.shift();
      return play();
    } else {
      turn = turn === 1 ? 2 : 1;
      if (allC[`c${turn}`].length === 0 && goal) return 'No';
      return play();
    }
  }

  if (allC['c1'][0] === goal[0]) {
    return play();
  } else {
    turn = 2;
    return play();
  }
}

console.log(
  solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']),
);

console.log(
  solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']),
);
