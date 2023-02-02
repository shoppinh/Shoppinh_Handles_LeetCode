/**
 * 
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. 
 * The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet, 
 * return true if and only if the given words are sorted lexicographically in this alien language.
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function(words, order) {
    const map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        let j = 0;
        while (j < word1.length && j < word2.length) {
            if (word1[j] !== word2[j]) {
                if (map[word1[j]] > map[word2[j]]) return false;
                break;
            }
            j++;
        }
        // The alphabet is always larger than empty char
          if (j === word2.length && word1.length > word2.length) return false;
    }
    return true;
};

console.log("🚀 ~ file: 953. Verifying an Alien Dictionary.js:12 ~ isAlienSorted ~ isAlienSorted", isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))
