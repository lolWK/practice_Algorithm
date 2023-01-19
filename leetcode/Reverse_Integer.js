/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x); // 부호
  let str = parseInt((x * sign).toString().split('').reverse().join('')) * sign;

  if (str > Math.pow(2, 31) - 1) return 0;
  if (str < Math.pow(-2, 31) - 1) return 0;

  return str;
};

reverse(123);
reverse(-123);
reverse(120);
