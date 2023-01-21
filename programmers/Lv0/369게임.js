function solution(order) {
  var answer = 0;

  let string = '' + order;

  for (v of string) {
    if (v === '3' || v === '6' || v === '9') answer += 1;
  }

  return answer;
}

solution(29423);

function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
