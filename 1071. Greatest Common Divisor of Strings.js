/**
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * Example:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// Cong thuc tim UCLN
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const gcdOfStrings = function (str1, str2) {
  // Check if str2 is a repeated substring of str1
  if (str1 + str2 !== str2 + str1) return "";
  if (str1.length < str2.length) return gcdOfStrings(str2, str1);
  return str1.substring(0, gcd(str1.length, str2.length));
};
console.log(
  "🚀 ~ file: 1071. Greatest Common Divisor of Strings.js:16 ~ gcdOfStrings ~ gcdOfStrings",
  gcdOfStrings("ABABAB", "ABAB")
);
