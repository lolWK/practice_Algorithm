// 포토를 순회한다
// 포토 순회 이름과 같은 것을 name 배열 인덱스에서 찾음
// 야닝 인덱스의 숫자를 더함

function solution(name, yearning, photo) {
  let result = Array.from({ length: photo.length }, () => 0);

  for (let photos in photo) {
    photo[photos].filter((value) => {
      let idx = name.indexOf(value);

      if (idx !== -1) {
        result[photos] += yearning[idx];
      }
    });
  }

  return result;
}
