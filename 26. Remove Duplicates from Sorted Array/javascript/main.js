/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0; // Handle empty array case

  let uniqueCount = 1; // Start with the first element as unique
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[uniqueCount - 1]) {
      // Compare with the last unique element
      nums[uniqueCount] = nums[i]; // Update the array in place
      uniqueCount++; // Increment the count of unique elements
    }
  }

  return uniqueCount;
};

console.log(
  "Remove duplicate",
  removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 10, 10])
);
