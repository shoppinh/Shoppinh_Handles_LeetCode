/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

// You are given a 0-indexed m x n binary matrix grid.

// A 0-indexed m x n difference matrix diff is created with the following procedure:

// Let the number of ones in the ith row be onesRowi.
// Let the number of ones in the jth column be onesColj.
// Let the number of zeros in the ith row be zerosRowi.
// Let the number of zeros in the jth column be zerosColj.
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
//  Return the difference matrix diff.

// Approach 1: Brute Force
const onesMinusZeros = function (grid) {
  const result = [];
  const rows = grid.length;
  const columns = grid[0].length;

  // initialize result matrix
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < columns; j++) {
      result[i][j] = 0;
    }
  }

  // calculate result matrix
  for (let i = 0; i < rows; i++) {
    let ones = 0;
    let zeros = 0;
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 1) {
        ones++;
      } else {
        zeros++;
      }
    }
    for (let j = 0; j < columns; j++) {
      result[i][j] = result[i][j] + ones - zeros;
    }
  }
  for (let j = 0; j < columns; j++) {
    let ones = 0;
    let zeros = 0;
    for (let i = 0; i < rows; i++) {
      if (grid[i][j] === 1) {
        ones++;
      } else {
        zeros++;
      }
    }
    for (let i = 0; i < rows; i++) {
      result[i][j] = result[i][j] + ones - zeros;
    }
  }
  return result;
};

// Approach 2: Optimized

const onesMinusZeros2 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowOnes = new Array(m).fill(0);
  const colOnes = new Array(n).fill(0);

  // Count ones in each row and column
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // as matrix contains only 0 and 1, we can just add the values
      rowOnes[i] += grid[i][j];
      colOnes[j] += grid[i][j];
    }
  }

  // Calculate the difference matrix
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // as matrix contains only 0 and 1, to calculate zeros we can just subtract the values length - ones
      // it is the same as colOnes + rowOnes - (m - rowOnes) - (n - colOnes)
      grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - m - n;
    }
  }

  return grid;
};

console.log(
  "onesMinusZeros",
  onesMinusZeros2([
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ])
);
