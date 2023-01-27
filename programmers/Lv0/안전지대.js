function solution(board) {
  var answer = 0;
  var answerArray = board.map(x => board.map(y => 0));
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board.length; x++) {
      if (board[y][x] === 1) {
        if (y - 1 >= 0 && x - 1 >= 0) answerArray[y - 1][x - 1] = 1;
        if (x - 1 >= 0) answerArray[y][x - 1] = 1;
        if (y + 1 < board.length && x - 1 >= 0) answerArray[y + 1][x - 1] = 1;

        if (y - 1 >= 0) answerArray[y - 1][x] = 1;
        answerArray[y][x] = 1;
        if (y + 1 < board.length) answerArray[y + 1][x] = 1;

        if (y - 1 >= 0 && x + 1 < board.length) answerArray[y - 1][x + 1] = 1;
        if (x + 1 < board.length) answerArray[y][x + 1] = 1;
        if (y + 1 < board.length && x + 1 < board.length)
          answerArray[y + 1][x + 1] = 1;
      }
    }
  }
  answerArray.map(y => {
    y.map(x => {
      if (x === 0) answer++;
    });
  });
  return answer;
}
