/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  // Initialize an adjacency list to represent the tree
  const adjList = new Map();
  for (const [u, v] of edges) {
    if (!adjList.has(u)) adjList.set(u, []);
    if (!adjList.has(v)) adjList.set(v, []);
    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  // Initialize an array to store the sum of distances for each node
  const sum = new Array(n).fill(0);

  // Perform a depth-first search to compute the sum of distances for each node
  function dfs(u, parent) {
    let s = 0;
    for (const v of adjList.get(u)) {
      if (v === parent) continue;
      const t = dfs(v, u);
      sum[u] += t;
      s += t + 1;
    }
    return s;
  }

  dfs(0, -1);

  // Perform a breadth-first search to compute the sum of distances for each node
  function bfs() {
    const queue = [];
    queue.push(0);
    const dist = new Array(n).fill(-1);
    dist[0] = 0;
    while (queue.length > 0) {
      const u = queue.shift();
      for (const v of adjList.get(u)) {
        if (dist[v] !== -1) continue;
        dist[v] = dist[u] + 1;
        sum[v] = sum[u] - dist[v] + (n - dist[v] - 1);
        queue.push(v);
      }
    }
  }

  bfs();

  return sum;
};

console.log("result", sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]))