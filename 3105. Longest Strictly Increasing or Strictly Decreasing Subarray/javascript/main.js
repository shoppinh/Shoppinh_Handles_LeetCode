
// Brute force
var convertToDirection = (num) => {
  return num > 0 ? 1 : num < 0 ? -1 : num;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestMonotonicSubarray = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let previousDirection = convertToDirection(nums[1] - nums[0]);
  let result = previousDirection !== 0 ? 2 : 1;
  let tempSum = previousDirection !== 0 ? 2 : 1;

  for (let index = 2; index < nums.length; index++) {
    let currentDirection = convertToDirection(nums[index] - nums[index - 1]);
    if (currentDirection === 0 || currentDirection !== previousDirection) {
      result = Math.max(tempSum, result);
      tempSum = currentDirection !== 0 ? 2 : 1;
    } else {
      tempSum += 1;
    }
    previousDirection = currentDirection;
  }

  return Math.max(tempSum, result);
};

// Two counters (more straight-forward)

var longestMonotonicSubarray2 = function(nums) {
    if (nums.length <= 1) return nums.length;
    
    let inc = 1, dec = 1, maxLen = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            inc++;
            dec = 1;
        } else if (nums[i] < nums[i-1]) {
            dec++;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        maxLen = Math.max(maxLen, inc, dec);
    }
    
    return maxLen;
};

console.log(longestMonotonicSubarray([3, 4, 7, 7]));
