/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  let result = 0;
  const new_set = new Set(nums);

  for (const num of new_set) {
    if (new_set.has(num - 1)) {
      continue;
    }

    let curr_num = num;
    let curr_sum = 1;

    while (new_set.has(curr_num + 1)) {
      curr_num += 1;
      curr_sum += 1;
    }
    result = Math.max(result, curr_sum);
  }

  return result;
};
