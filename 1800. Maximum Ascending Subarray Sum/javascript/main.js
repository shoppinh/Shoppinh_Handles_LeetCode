/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
  if (nums.length === 0) return 0;  // Handle empty array case
  let result = nums[0];
  let sumTemp = nums[0];
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] <= nums[index - 1]) {
      result = Math.max(result, sumTemp);
      sumTemp = nums[index];
    } else {
      sumTemp += nums[index];
    }
  }
  return Math.max(result, sumTemp);
};

console.log(maxAscendingSum([12,17,15,13,10,11,12]))