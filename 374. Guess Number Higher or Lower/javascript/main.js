/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function (num) {
  if (num > 6) {
    return -1;
  } else if (num < 6) {
    return 1;
  } else return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    // Prevents potential integer overflow
    let middle = low + Math.floor((high - low) / 2);
    let result = guess(middle);
    if (result === 0) {
      return middle;
    } else if (result === 1) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
};

console.log(guessNumber(10));
