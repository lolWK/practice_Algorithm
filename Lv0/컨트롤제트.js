function solution(s) {
  var answer = 0;
  const arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ' && arr[i] !== 'Z') {
      answer += Number(arr[i]);
    }
    if (arr[i] === 'Z') {
      answer -= arr[i - 1];
    }
  }
  return answer;
}

solution('10 20 30 40');
