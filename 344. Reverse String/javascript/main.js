/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // use for loop
  for (let index = 0; index < s.length / 2; index++) {
    let temp = s[index];
    s[index] = s[s.length - 1 - index];
    s[s.length - 1 - index] = temp;
  }
//   use built-in function
  s.reverse();

  // use two pointers
  let left = 0, right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
