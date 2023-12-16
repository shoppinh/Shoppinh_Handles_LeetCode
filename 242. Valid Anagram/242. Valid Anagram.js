/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  // If the maps are not the same size, then they are not anagrams
  if (sMap.size !== tMap.size) {
    return false;
  }
  // When looping through a map, the order is the same as insertion order
  for (const [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("cat", "ran"), false);
