/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (high >= low) {
    let middle = Math.floor((low + high) / 2);

    if (target == nums[middle]) {
      return target;
    } else if (target > nums[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
};
