function solution(my_str, n) {
  let strArr = my_str.split('');

  let ans = [];

  while (strArr.length > 0) {
    ans.push(strArr.splice(0, n).join(''));
  }

  return ans;
}

// function solution(my_str, n) {
//     var answer = [];
//     for(let i = 0; i < my_str.length; i += n){
//         answer.push(my_str.substring(i, i+n));
//     }
//     return answer;
// }

solution('abc1Addfggg4556b', 6);
