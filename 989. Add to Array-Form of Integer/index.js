/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
  let sum = BigInt(num.join('')) + BigInt(k);
  let convertSum = sum.toString().split('').map((num) => parseInt(num));
  return convertSum;
};
console.log("🚀 ~ file: index.js:7 ~ addToArrayForm ~ addToArrayForm", addToArrayForm([1, 2, 0, 0], 34))

