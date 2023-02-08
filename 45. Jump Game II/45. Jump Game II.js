/**
 * @param {number[]} nums
 * @return {number}
 */

  // Normal solution Use dynamic programming to solve this problem
  const jump = function (nums) {
  // Create a dp array to store the min number of jumps to reach the ith index
  let n = nums.length;
  let dp = new Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= i + nums[i] && j < n; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }
  return dp[n - 1];
};


// More optimized solution using greedy algorithm
const jump2 = function (nums) {
  let output = 0;
  // jump is the maximum distance that we can reach in a single jump
  let jump = 0;
  // far is the farthest index that we can reach
  let far = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    jump = Math.max(jump, nums[i] + i);
    if (i === far) {
      far = jump;
      output++;
    }
  }
  return output;
};
console.log(
  "🚀 ~ file: 45. Jump Game II.js:6 ~ jump ~ jump",
  jump2([2, 3, 0, 1, 4])
);