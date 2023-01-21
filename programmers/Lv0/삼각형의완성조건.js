function solution(sides) {
  var answer = 0;
  let sort = sides.sort((a, b) => a - b);
  if (sort[0] + sort[1] > sort[2]) answer += 1;
  if (sort[0] + sort[1] <= sort[2]) answer += 2;

  return answer;
}

// function solution(sides) {
//   sides = sides.sort((a,b) => a-b)
//   return sides[0]+sides[1] > sides[2] ? 1 : 2;
// }
solution([199, 72, 222]);
