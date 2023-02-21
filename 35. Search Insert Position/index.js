/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    const pos = nums.indexOf(target);
    if (pos >= 0) {
        return pos;
    }
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
};