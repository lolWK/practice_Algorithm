const fs = require('fs');
const readline = require('readline');

function diagonalDifference(arr) {
  // 1. 정사각형 길이 구하기
  const size = arr.length;

  // 2. 대각선 길이 구하기
  let Ldiagonal = 0;
  let Rdiagonal = 0;

  for (let i = 0; i < size; i++) {
    Ldiagonal += arr[i][i];
    Rdiagonal += arr[i][size - i - 1];
  }

  // 3. 대각선 길이 차이의 절대값 구하기
  return Math.abs(Ldiagonal - Rdiagonal);
}

function main() {
  const input = readline.createInterface({
    input: fs.createReadStream('Diagonal_Difference.txt'),
  });

  let lines = [];
  input.on('line', function (line) {
    console.log(line);
    lines.push(line);
  });

  input.on('close', function () {
    const n = parseInt(lines[0].trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
      arr[i] = lines[i + 1]
        .replace(/\s+$/g, '')
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);
    console.log(result);
  });
}

main();
