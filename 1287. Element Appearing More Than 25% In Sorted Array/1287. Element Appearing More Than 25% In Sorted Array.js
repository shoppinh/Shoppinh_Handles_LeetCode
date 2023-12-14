/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function (arr) {
  const n = arr.length;
  let count = 0;
  let prev = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] === prev) {
      count++;
      if (count > n / 4) {
        return prev;
      }
    } else {
      // Cause the array is sorted, so if the current is different from next one, we reset the counter
      prev = arr[i];
      count = 1;
    }
  }
  return -1;
};
