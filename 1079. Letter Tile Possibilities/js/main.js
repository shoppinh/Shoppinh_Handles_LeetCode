var buildChar = function (charCount) {
    let totalCount = 0;
    for (let i = 0; i < 26; i++) {
        if (charCount[i] > 0) {
            totalCount++;
            charCount[i]--;
            totalCount += buildChar(charCount);
            charCount[i]++;
        }
    }
    return totalCount;
}


/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let charCount = new Array(26).fill(0);
    for (let ch of tiles) {
        charCount[ch.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    return buildChar(charCount);

}


console.log(numTilePossibilities("AAB"))


// ABC -> A,B,C,AB,AC,BC,BA,CA,CB,ABC,ACB,BAC,BCA,CAB,CBA => 3 + 6 + 6
// AAA -> A,AA,AAA -> 1+1+1
// AAB-> 8 -> 2+3+3


// N=3 KEYS = 1 -> RESULT = N
//  N=3 KEYS = (N-1)+(N-1)

// 1+ (6)


