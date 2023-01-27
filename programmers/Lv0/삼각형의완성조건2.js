// 경우1 제일 큰변이 sides에 있는 경우
// 경우2 sides 두 합보다 작아야하는데 sides의 제일 큰변보다 작아야함
function solution(sides) {
  let count = 0;
  const maxSides = Math.max(...sides);
  const minSides = Math.min(...sides);
  console.log(maxSides, minSides);

  for (let i = maxSides - minSides + 1; i <= maxSides; i++) {
    count += 1;
  }
  for (let i = maxSides + 1; i < maxSides + minSides; i++) {
    count += 1;
  }
  return count;
}

solution([3, 6]);
// solution([11, 7]);
