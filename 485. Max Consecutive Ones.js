// Input: nums = [1,1,0,1,1,1]
// Output: 3

const findMaxConsecutive = (array) => {
  let count = 0;
  let maxConsecutive = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 1) {
      count++;
      if (count > maxConsecutive) {
        maxConsecutive = count;
      }
    } else {
      count = 0;
    }
  }
  return maxConsecutive;
};
console.log(findMaxConsecutive([1, 1, 0, 1, 1, 1]));
