function solution(id_pw, db) {
  let result = '';

  db.map((item, i) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) result = 'login';
    else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) result = 'wrong pw';
    else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = 'fail';
  });

  return result;
}

//
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
//
function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  for (const [dbId, dbPw] of db) {
    if (userId === dbId && userPw === dbPw) return 'login';
    else if (userId === dbId && userPw !== dbPw) return 'wrong pw';
  }
  return 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
);
