/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let i = 0;
  while (i< Math.round(s.length/2)) {
    if (s[i] !== s[s.length-1-i]) {
      return false;
    }
  }
  return true;
};
