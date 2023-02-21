/**
 * @param {number[]} nums
 * @return {number}
 */
// Still not the best solution
const singleNonDuplicate = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
};

// Better solution
// Because the array is sorted, so we can use binary search
// Also, we can use the fact that the single element is always at the even index, 
// so that means the goal is to find the first even index that is not equal to its next element
// If the mid is odd, we can minus 1 to make it even
const singleNonDuplicate2 = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 === 1) {
      mid--;
    }
    // If the mid is equal to its next element, then the single element is on the right side
    // Otherwise, the single element is on the left side
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
console.log("🚀 ~ file: index.js:27 ~ singleNonDuplicate2 ~ singleNonDuplicate2:", singleNonDuplicate2([1,1,2,3,3,4,4,8,8]))
