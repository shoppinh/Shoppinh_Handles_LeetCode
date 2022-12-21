/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let map = {};
    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]]) {
            map[magazine[i]]++;
        } else {
            map[magazine[i]] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) {
            return false;
        } else {
            map[ransomNote[i]]--;
        }
    }
    return true;
};

canConstruct("magazine","ransomnote")