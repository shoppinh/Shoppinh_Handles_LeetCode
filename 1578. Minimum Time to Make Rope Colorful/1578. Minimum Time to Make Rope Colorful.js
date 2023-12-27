/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

// Approach 1: Greedy
const minCost = function (colors, neededTime) {
  // find all substrings that has same color, remove all but the longest one
  let result = 0;
  let i = 0;
  let tempArr = [neededTime[i]];
  while (i < colors.length) {
    if (colors[i] === colors[i + 1]) {
      tempArr.push(neededTime[i + 1]);
    } else {
      if (tempArr.length > 1) {
        result += tempArr.reduce((a, b) => a + b, 0) - Math.max(...tempArr);
      }
      if (i + 1 < colors.length) {
        tempArr = [neededTime[i + 1]];
      }
    }
    i++;
  }
  return result;
};

console.log("should be", minCost("abaac", [1, 2, 3, 4, 5]));

// Approach 2: Better Greedy
const minCost2 = function (colors, neededTime) {
  let totalTime = 0; // This will hold the minimum total time
  const n = colors.length; // The size of the colors string

  // Loop through the colors string
  for (let i = 0, j = 0; i < n; i = j) {
    // Start of the same color sequence
    j = i;
    // Hold the sum of times for balloons of the same color group
    let sumTimes = 0;
    // Hold the maximum time needed for a single balloon in the same color group
    let maxTime = 0;

    // While we haven't reached the end of the string and the current color is the same
    // as the one we started this sequence with, add to sumTimes and update maxTime
    while (j < n && colors[j] === colors[i]) {
      sumTimes += neededTime[j];
      maxTime = Math.max(maxTime, neededTime[j]);
      j++;
    }

    // Add to total time the sum of needed times minus the max needed time for this sequence
    // This is because we're removing all but one balloon in the sequence
    if (j - i > 1) {
      totalTime += sumTimes - maxTime;
    }
  }

  // Return the total minimum time calculated
  return totalTime;
};
