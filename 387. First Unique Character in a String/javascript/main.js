/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Using array to store frequency of each character will be faster than using Map because the array is lighter than Map in terms of memory and time.
  const freq = [];
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    freq[char.charCodeAt(0)]
      ? freq[char.charCodeAt(0)]++
      : (freq[char.charCodeAt(0)] = 1);
  }

  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (freq[char.charCodeAt(0)] === 1) {
      return index;
    }
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
