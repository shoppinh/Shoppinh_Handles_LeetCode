/**
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * @param {string} s
 * @return {number}
 */
const symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
const romanToInt = function (s) {
  let sum = 0;

  // Replace the IV, IX, XL, XC, CD, CM with the corresponding number which passes the high to low order
  // However the performance is not good
  // s = s.replace(/IV/g, 'IIII');
  // s = s.replace(/IX/g, 'VIIII');
  // s = s.replace(/XL/g, 'XXXX');
  // s = s.replace(/XC/g, 'LXXXX');
  // s = s.replace(/CD/g, 'CCCC');
  // s = s.replace(/CM/g, 'DCCCC');

  // for (let i = 0; i < s.length; i++) {
  //     sum += map.get(s[i]);
  // }

  for (let i = 0; i < s.length; i++) {

    if (symbols[s[i]] < symbols[s[i + 1]]) {
      sum -= symbols[s[i]];
    } else {
      sum += symbols[s[i]];
    }
  }
  return sum;
};
