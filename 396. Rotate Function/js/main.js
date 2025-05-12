/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function (nums) {
  // After observing, we find that F(k) = F(k-1) + sum(all_nums) - n*nums[n-k]
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  let fValue = nums.reduce((prev, curr, currIdx) => currIdx * curr + prev, 0);
  let result = fValue;
  for (let i = 1; i < nums.length; i++) {
    fValue = fValue + sum - nums.length * nums[nums.length - i];
    result = Math.max(fValue, result);
  }
  return result;
};

console.log(maxRotateFunction([4, 3, 2, 6]));
