/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
  const stack = []; // Elements: [index, height]
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [idx, h] = stack.pop();
      maxArea = Math.max(maxArea, h * (i - idx));
      start = idx;
    }
    stack.push([start, heights[i]]);
  }

  while (stack.length > 0) {
    const [idx, h] = stack.pop();
    maxArea = Math.max(maxArea, h * (heights.length - idx));
  }

  return maxArea;
};
