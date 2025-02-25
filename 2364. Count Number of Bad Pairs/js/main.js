/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1: Brute-force
var countBadPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i != nums[j] - nums[i]) {
        count++;
      }
    }
  }
  return count;
};
// Method 2: Reverse method

// nonBadPair means that j-i = nums[j] - nums[i] => j -nums[j] = i - nums[i]
// a variable badPairs to 0 to keep track of the total count of bad pairs.
// a hash map diffCount to store the frequency of differences between position and value.

var countBadPairs2 = function (nums) {
let count = 0;
const diffCount = new Map();

for (let index = 0; index < nums.length; index++) {
    const diff = index - nums[index];
    // Count of previous positions with same difference
    if (diffCount.has(diff)) {
        count += diffCount.get(diff);
    }

    diffCount.set(diff, (diffCount.get(diff) || 0) + 1);
}

return (nums.length * (nums.length - 1)) / 2 - count;
};

console.log(countBadPairs2([1,2,3,4]));
