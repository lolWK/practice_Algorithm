/**
 * @param {number} x
 * @return {boolean}
 */
// palindrome 기러기 토마토
var isPalindrome = function (x) {
  const palindrome = String(x).split('').reverse().join('');
  return String(x) === palindrome;
};
