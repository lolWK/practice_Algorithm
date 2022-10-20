function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map(e => sorted.findIndex(s => s === e) + 1);
}

/* findIndex https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex */
