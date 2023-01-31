function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}
solution('olleh', 'hello');
solution('allpe', 'apple');
