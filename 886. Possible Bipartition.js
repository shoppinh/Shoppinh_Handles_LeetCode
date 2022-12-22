/**
 * We want to split a group of n people (labeled from 1 to n) into two groups of any size.
 * Each person may dislike some other people, and they should not go into the same group.
 * Given the integer n and the array dislikes where dislikes[i] = [ai, bi]
 * indicates that the person labeled ai does not like the person labeled bi,
 * return true if it is possible to split everyone into two groups in this way.
 *
 * Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
 * Output: true
 * Explanation: group1 [1,4] and group2 [2,3].
 *
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (n, dislikes) {
  let graph = {};
  const visited = Array(n + 1).fill(false);
  const color = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let [u, v] of dislikes) {
    graph[u].push(v);
    graph[v].push(u);
  }
  for (let i = 1; i <= n; i++) {
    if (!colorNodes(i)) return false;
  }
  return true;

  function colorNodes(node) {
    if (visited[node]) return true;
    const currColor = new Set([1, 2]);

    // remove colors used by neighbors
    for (let child of graph[node]) {
      if (color[child] === 1) currColor.delete(1);
      if (color[child] === 2) currColor.delete(2);
    }

    // no color is available return false
    if (currColor.size === 0) return false;

    // assign the smallest available color
    color[node] = Math.min(...currColor);
    visited[node] = true;
    // Use recursion
    for (let child of graph[node]) {
      if (!colorNodes(child)) return false;
    }
    return true;
  }
};

console.log("possibleBipartition",possibleBipartition(4, [[1,2],[1,3],[2,4]]))
