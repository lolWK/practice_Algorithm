function solution(n, k) {
  let foods = n * 12000;
  let drinks = k * 2000;
  let service = Math.floor(n / 10) * 2000;
  return foods + drinks - service;
}
