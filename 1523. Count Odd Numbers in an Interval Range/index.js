/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (low % 2 === 0) {
    low++;
  }
  if (high % 2 === 0) {
    high--;
  }
  return (high - low) / 2 + 1;
};
