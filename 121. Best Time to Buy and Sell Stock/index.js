/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // The goal is to find the largest deviation so we need to find the min and max of array
  // , however we need follow the rule that the sell day has to be after the buy day
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
console.log("🚀 ~ file: index.js:6 ~ maxProfit ~ maxProfit:", maxProfit([7,1,5,3,6,4]))
