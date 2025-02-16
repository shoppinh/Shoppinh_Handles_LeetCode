/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let differenceCounter = 0;
//   Create variables to store the index of the difference pair
  let i = -1;
  let j = -1;
  //   Check if
  for (let index = 0; index < s1.length; index++) {
    const s1El = s1[index];
    const s2El = s2[index];
    if (differenceCounter > 2) {
      return false;
    }
    if (s1El !== s2El) {
      differenceCounter++;
      if (i == -1) {
        i = index;
      } else if (j == -1) {
        j = index;
      }
    }
  }

  return (
    differenceCounter === 0 ||
    (differenceCounter === 2 && s1[i] === s2[j] && s1[j] === s2[i])
  );
};
