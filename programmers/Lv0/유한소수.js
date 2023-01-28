function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

//

function solution(a, b) {
  return (a / b).toString().length > 10 ? 2 : 1;
}
