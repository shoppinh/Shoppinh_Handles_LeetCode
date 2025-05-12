/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const modifiedMatrix = function (matrix) {
  const m = matrix.length;

  const n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    let maxTemp = 0;
    for (let j = 0; j < m; j++) {
      maxTemp = Math.max(maxTemp, matrix[j][i]);
    }
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = maxTemp;
      }
    }
  }

  return matrix;
};

console.log(
  modifiedMatrix([
    [2, -1, 2, -1, 2],
    [1, 0, -1, 2, -1],
    [2, -1, -1, -1, 2],
    [2, 1, 2, -1, 2],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, -1],
    [2, -1, 2, 2, 0],
    [0, 1, 0, 2, 2],
    [2, 2, 0, 1, -1],
  ])
);
