/**
 * @param {number[][]} img
 * @return {number[][]}
 */
// Approach 1: Brute Force
const normalImageSmoother = function (img) {
  const result = Array.from({ length: img.length }, () =>
    Array(img[0].length).fill(0)
  );

  for (let m = 0; m < img.length; m++) {
    for (let n = 0; n < img[m].length; n++) {
      let sum = 0;
      let count = 0;
      for (let i = m - 1; i <= m + 1; i++) {
        for (let j = n - 1; j <= n + 1; j++) {
          if (i >= 0 && i < img.length && j >= 0 && j < img[m].length) {
            sum += img[i][j];
            count++;
          }
        }
      }
      result[m][n] = Math.floor(sum / count);
    }
  }
  return result;
};
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);

// Approach 2: Optimized

const imageSmoother = function (img) {};
