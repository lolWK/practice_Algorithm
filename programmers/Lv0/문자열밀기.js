function solution(A, B) {
  var answer = 0;
  const a = A.split('');
  const b = B.split('');
  while (a.join('') != b.join('')) {
    a.unshift(a[a.length - 1]);
    a.pop();
    answer += 1;
    if (answer == a.length) break;
  }
  return answer === a.length ? -1 : answer;
}

//
// let solution=(a,b)=>(b+b).indexOf(a)

solution('hello', 'ohell');
