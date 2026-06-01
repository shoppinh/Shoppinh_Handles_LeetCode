/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // Clean the string by removing non-alphanumeric characters and converting to lowercase
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Initialize two pointers, one at the start and one at the end of the string
  let left = 0;
  let right = s.length - 1;
  // Loop until the two pointers meet in the middle
  while (left < right) {
    // If the characters at the two pointers are not equal, return false
    if (s[left] !== s[right]) {
      return false;
    }
    // Move the pointers towards the center
    left++;
    right--;
  }
  // If we reach this point, the string is a palindrome
  return true;
};
