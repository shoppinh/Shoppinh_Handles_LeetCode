/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  // Create 2 list of 26 zeros to represent the frequency of each letter in alphabet in s1 and s2
  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);
  // Loop through s1 and s2(0 to s1.length)
  for (let i = 0; i < s1.length; i++) {
    // Subtract 97 from the char code to get the index of the letter in the alphabet
    s1Map[s1.charCodeAt(i) - 97]++;
    s2Map[s2.charCodeAt(i) - 97]++;
  }

  // Loop through the rest of s2 the check whether the permutation of s1 is in s2
  // The cause to check the existence of the permutation is that we check the matching frequency of each letter in s1 and current s2
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(s1Map, s2Map)) return true;
    // We use a sliding window to check the permutation of s1 in s2 with the size of window is s1's length
    // Increment and decrement make sure that that the count of characters in s2Map only reflects the count of characters 
    // in the current window,  and not the count of characters in the previous windows.
    s2Map[s2.charCodeAt(i + s1.length) - 97]++;
    s2Map[s2.charCodeAt(i) - 97]--;
  }
  return matches(s1Map, s2Map);
}

function matches(s1Map, s2Map) {
  for (let i = 0; i < 26; i++) {
    if (s1Map[i] !== s2Map[i]) return false
  }
  return true;
}




console.log("🚀 ~ file: 567. Permutation in String.js:24 ~ checkInclusion", checkInclusion('ab', 'eidbaooo'))
