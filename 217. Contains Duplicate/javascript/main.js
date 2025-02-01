/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Using map
  let result = false;

  const tempMap = new Map();
  nums.forEach((num) => {
    if (tempMap.has(num)) {
      result = true;
      return;
    }
    tempMap.set(num, 1);
  });

  return result;

  //   Using set
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3]));
