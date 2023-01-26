function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b);

  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}
// -값 곱하기 -값일경우 정렬에서 가장 작은 값이지만 곱하면 가장 큰수일수도 있다
