function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
  return Array.from(my_string)
    .filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');
}

solution('bus');
