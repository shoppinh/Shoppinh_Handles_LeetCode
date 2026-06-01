/**
 * @param {number[]} height
 * @return {number}
 */
// Brute force solution
// Time complexity: O(n^2)
// Space complexity: O(1)
var maxArea = function (height) {
  let maxArea = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

// Two-pointer solution
// Time complexity: O(n)
// Space complexity: O(1)
var maxAreaTwoPointer = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
