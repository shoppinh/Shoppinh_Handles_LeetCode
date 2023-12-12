/**
 * @param {number[]} nums
 * @return {number}
 */
// Approach 1: Sort
const maxProduct = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => (a - 1) * (b - 1));
};

// Approach 2: Find Two Largest Numbers

const maxProduct2 = function (nums) {
  let max1 = 0;
  let max2 = 0;

  for (const num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return (max1 - 1) * (max2 - 1);
};
