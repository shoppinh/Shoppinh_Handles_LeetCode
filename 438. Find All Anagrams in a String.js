
/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * You may return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 */


/**
 * This function is to find all the start indices of p's anagrams in s (s is always longer than p)
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  // Create a list of 26 zeros to represent the frequency of each letter in alphabet in s and p
  let sMap = new Array(26).fill(0);
  let pMap = new Array(26).fill(0);
  // Loop through s and p(0 to p.length)
  for (let i = 0; i < p.length; i++) {
    // Subtract 97 from the char code to get the index of the letter in the alphabet
    sMap[s.charCodeAt(i) - 97]++;
    pMap[p.charCodeAt(i) - 97]++;
  }
  // Create an array to store the start indices of p's anagrams in s
  let result = [];
  // Loop through the rest of s the check whether the permutation of p is in s
  // The cause to check the existence of the permutation is that we check the matching frequency of each letter in p and current s
  for (let i = 0; i < s.length - p.length; i++) {
    if (matches(pMap, sMap)) result.push(i);
    // We use a sliding window to check the permutation of p in s with the size of window is p's length
    // Increment and decrement make sure that that the count of characters in sMap only reflects the count of characters 
    // in the current window,  and not the count of characters in the previous windows.
    sMap[s.charCodeAt(i + p.length) - 97]++;
    sMap[s.charCodeAt(i) - 97]--;
  }
  // Check the last window
  if (matches(pMap, sMap)) result.push(s.length - p.length);
  return result;
};

function matches(pMap, sMap) {
  for (let i = 0; i < 26; i++) {
    if (pMap[i] !== sMap[i]) return false;
  }
  return true;
}



console.log(
  "🚀 ~ file: 438. Find All Anagrams in a String.js:16 ~ findAnagrams ~ findAnagrams",
  findAnagrams("cbaebabacd", "abc")
);
