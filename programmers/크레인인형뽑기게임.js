function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] != 0) {
        basket.push(board[i][moves[j] - 1]);
        board[i][moves[j] - 1] = 0;

        if (dup(basket) && basket.length >= 2) {
          basket.pop();
          basket.pop();
          count += 2;
        }
        break;
      }
    }
  }
  return count;
}

const dup = basket => {
  return basket[basket.length - 1] == basket[basket.length - 2];
};

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  // [1, 5, 4],
  [1, 5, 3, 5, 1, 2, 1, 4],
);
// 4 3 1 1 3 2 4 => 4개 사라짐
// 무브 값대로 보관함에 순서대로 넣으면서 겹치면 없애기
