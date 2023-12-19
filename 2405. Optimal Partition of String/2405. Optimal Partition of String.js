/**
 * @param {string} s
 * @return {number}
 */
const partitionString = function (s) {
  let count = 1;
  let prevChars = s[0];
  for (let i = 1; i < s.length; i++) {
    if (!prevChars.includes(s[i])) {
      prevChars += s[i];
    } else {
      count++;
      prevChars = s[i];
    }
  }
  return count;
};

console.log(
  "partitionString('hdklqkcssgxlvehva')",
  partitionString("hdklqkcssgxlvehva")
);
