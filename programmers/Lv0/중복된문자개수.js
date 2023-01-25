function solution(array, n) {
  const count = array.filter(element => n === element);
  const length = count.length;
  return length;
}

solution([1, 1, 2, 3, 4, 5], 1);
solution([0, 2, 3, 4], 1);
