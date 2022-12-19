/**
 * ? Given an integer x, return true if x is a  palindrome, and false otherwise.
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * @param {number} x
 * @return {boolean}
 */

const isPalindromeKien = function(x) {
    // can't use due to non-constant value is not allowed
    return parseInt(x.toString().split('').reverse().join('')) === x;
};
const isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let rev = 0;
    let num = x;
    // We revert the number by taking the last digit and adding it to the front of the new number
    // Only revert half of the number because if we revert all, we will got the int max issue
    while (num > rev) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
    // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    return rev === num || Math.floor(rev/10) === num;
};

console.log("Result: ",isPalindrome(121))
