// 앞이랑 끝이랑 인덱스 같은거

function solution(s) {
  let res = [];
  // 앞이랑 끝이랑 인덱스 같은거
  for (let c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      res.push(c);
    }
  }
  return res.sort().join('');
}

solution('abcabcadc');
