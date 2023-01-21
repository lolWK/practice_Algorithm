// 두 배열 합친 길이 - 중복 제거 배열 길이

function solution(s1, s2) {
  let all_arr = s1.concat(s2);

  return all_arr.length - [...new Set(all_arr)].length;
}

// 다른 사람

function solution(s1, s2) {
  const intersection = s1.filter(x => s2.includes(x));
  console.log(intersection);
  return intersection.length;
}

solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']);
