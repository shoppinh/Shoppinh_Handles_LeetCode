/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
  // Brute force time-complexity O(n^2)
  const sortedNums = [...nums].sort((x, y) => x - y);
  for (let i = 0; i < nums.length; i++) {
    if (nums.every((num, j) => num === sortedNums[(i + j) % nums.length])) {
      return true;
    }
  }
  return false;
};

// Instead of sorting and comparing all possible rotations, we simply count how many times the sequence decrease
// Since the sorted array is non-decreasing, so rotated array can have at most one decrease 
// Example:
// For [3,4,5,1,2], there's only one decrease (5->1), so it returns true
// For [2,1,3,4], there are two decreases (2->1 and 3->4), so it returns false
// Time-complexity O(n)

const check2 = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

console.log(check2([3, 4, 5, 1, 2]));
