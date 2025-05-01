/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
  // Brute force
  //   let result = 1;
  //   let needToBreak = false;
  //   while (!needToBreak) {
  //     let tempSum = result;
  //     let isSatisfied = true;
  //     for (let value of nums) {
  //       tempSum = tempSum + value;
  //       if (tempSum < 1) {
  //         result++;
  //         isSatisfied = false;
  //         break;
  //       }
  //     }
  //     if (isSatisfied) {
  //       needToBreak = true;
  //     }
  //   }
  //   return result;
  //   Another approach: find the min sum through each step
  // The result would be 1 - (minSum)

  let minSum = 0;
  let currSum = 0;

  for (const num of nums) {
    currSum += num;
    minSum = Math.min(minSum, currSum);
  }

  return Math.max(1, 1 - minSum);
};

console.log(minStartValue([1, 2]));
