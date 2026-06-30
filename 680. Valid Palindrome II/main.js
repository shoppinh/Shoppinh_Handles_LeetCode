/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
const validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping either the left or right character
      return (
        isPalindrome(s.slice(left + 1, right + 1)) ||
        isPalindrome(s.slice(left, right))
      );
    }
    left++;
    right--;
  }
  return true;
};
