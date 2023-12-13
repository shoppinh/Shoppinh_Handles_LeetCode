/**
 * @param {number[][]} mat
 * @return {number}
 */

// Check if other elements in the same row or column are 0

const isSpecial = function (mat, i, j) {
  for (let k = 0; k < mat.length; k++) {
    if (k !== i && mat[k][j] === 1) {
      return false;
    }
  }
  for (let k = 0; k < mat[0].length; k++) {
    if (k !== j && mat[i][k] === 1) {
      return false;
    }
  }
  return true;
};
const numSpecial = function (mat) {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1 && isSpecial(mat, i, j)) {
        count = count + 1;
      }
    }
  }
};
