/**
 * Given an array of integers temperatures represents the daily temperatures, 
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day 
 * to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Better version
const dailyTemperatures = function (temperatures) {
  // Declare a stack to store the index of the lower temperatures
  let stack = [];
  let answers = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop();
      answers[index] = i - index;
    }
    stack.push(i);
  }
  return answers;
};

// Kien's solution
const dailyTemperatures2 = function (temperatures) {
  let answers = new Array(temperatures.length).fill(0);
  for (let i= 0; i < temperatures.length; i++) {
    let count = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        count = j - i;
        break;
      }
    }
    answers[i] = count;
  }
  return answers;
};

console.log("🚀 ~ file: 739. Daily Temperatures.js:11 ~ dailyTemperatures ~ dailyTemperatures", dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

