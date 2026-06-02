/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let count = 0;
  while (true) {
    if (count > 100) {
      return false;
    }
    let next = 0;
    while (n > 0) {
      next = (next + (n % 10)**2);
      n = Math.floor(n / 10);
    }
    if (next === 1) {
      return true;
    } else {
      n = next;
      count += 1;
    }
  }
};

console.log(isHappy(19))
