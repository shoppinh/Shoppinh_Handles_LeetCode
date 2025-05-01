/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
  // Brute force solution
  //   const map = new Map();
  //   for (let i in nums) {
  //     if (!map.has(nums[i])) {
  //       map.set(nums[i], []);
  //     }
  //     map.get(nums[i]).push(i);
  //   }
  //   let count = 0;
  //   for (const value of map.values()) {
  //     for (let j = 0; j < value.length; j++) {
  //       for (let m = j + 1; m < value.length; m++) {
  //         if ((value[j] * value[m]) % k === 0) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   return count;

  // Another approach:
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log("Result: ", countPairs([3, 1, 2, 2, 2, 1, 3], 2));
