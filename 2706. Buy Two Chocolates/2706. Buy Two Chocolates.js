/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = function (prices, money) {
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  for (const element of prices) {
    if (element < min) {
      secondMin = min;
      min = element;
    } else if (element < secondMin) {
      secondMin = element;
    }
  }

  return money - (min + secondMin) >= 0 ? money - (min + secondMin) : money;
};

console.log("buyChoco()", buyChoco([1, 2, 2], 3));
