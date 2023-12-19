/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const kthFactor = function (n, k) {
  const factorArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factorArr.push(i);
    }
  }
  return factorArr[k - 1] ? factorArr[k - 1] : -1;
};
// better way, does not have to go through all the numbers
const kthFactor2 = function (n, k) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count === k) {
      return i;
    }
  }
  return -1;
};
