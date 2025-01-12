/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const distinctArray = nums.filter(
    (value, index) => nums.indexOf(value) === index
  );
  distinctArray.sort((a, b) => a - b);
  return distinctArray[nums.length >= 3 ? nums.length - 3 : nums.length];
};

const thirdMax2 = function (nums) {
  let max1 = null;
  let max2 = null;
  let max3 = null;
  for (const num of nums) {
    if (num === max1 || num === max2 || num === max3) continue;
    if (max1 === null || num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (max2 === null || num > max2) {
      max3 = max2;
      max2 = num;
    } else if (max3 === null || num > max3) {
      max3 = num;
    }
  }
  return max3 !== null ? max3 : max1 !== null ? max1 : Number.MIN_SAFE_INTEGER;
};
console.log(thirdMax([1, 2, 3, 12, 10, 11, 10]));
