/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// Not the best solution
// const shuffle = function(nums, n) {
//   const arr1 = nums.slice(0, n);
//   const arr2 = nums.slice(n);
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(arr1[i]);
//     result.push(arr2[i]);
//   }
//   return result;
    
// };

const shuffle = function(nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
    
}

