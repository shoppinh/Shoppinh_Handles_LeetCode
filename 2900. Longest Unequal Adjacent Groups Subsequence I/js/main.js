/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getLongestSubsequence = function (words, groups) {
  //   Single pass through
  const result = [words[0]];
  let lastGroup = groups[0];

  for (let i = 1; i < words.length; i++) {
    if (groups[i] !== lastGroup) {
      result.push(words[i]);
      lastGroup = groups[i];
    }
  }

  return result;
};

console.log(getLongestSubsequence(["d", "a", "v", "b"], [0, 1, 1, 1]));
// console.log(getLongestSubsequence(["d", "a", "v"], [1, 0, 0]));
// console.log(getLongestSubsequence(["d", "a", "v", "b"], [1, 0, 1, 0]));
// console.log(getLongestSubsequence(["d", "a", "v", "b"], [1, 0, 0, 0]));
