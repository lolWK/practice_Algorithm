function solution(keyinput, board) {
  let answer = [0, 0];
  const x = Math.floor(board[0] / 2);
  const y = Math.floor(board[1] / 2);
  keyinput.forEach(val => {
    switch (val) {
      case 'left':
        if (answer[0] > -x) {
          answer[0] -= 1;
        }
        break;
      case 'right':
        if (answer[0] < x) {
          answer[0] += 1;
        }
        break;
      case 'up':
        if (answer[1] < y) {
          answer[1] += 1;
        }
        break;
      case 'down':
        if (answer[1] > -y) {
          answer[1] -= 1;
        }
        break;
    }
  });
  return answer;
}

solution(['left', 'right', 'up', 'right', 'right'], [11, 11]);
