/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function (roads, seats) {
  let adj = new Map();
  let ans = 0;
  let visited = new Set([0]);
  // I assume using local best fit to solve this problem
  // If the seats is overloaded, we need to make the next representative to be the next node

  for (let [a, b] of roads) {
    if (!adj.has(a)) adj.set(a, new Set());
    if (!adj.has(b)) adj.set(b, new Set());
    adj.get(a).add(b);
    adj.get(b).add(a);
  }
  console.log("🚀 ~ file: index.js:16 ~ minimumFuelCost ~ adj", adj)
  console.log("division", Math.ceil(1/2))
  function dfs(node) {
    let reps = 1;
    if (!adj.has(node)) return reps;

    for (let child of adj.get(node)) {
      if (!visited.has(child)) {
        visited.add(child);
        reps += dfs(child);
      }
    }

    if (node) {
      ans += Math.ceil(reps / seats);
    }

    return reps;
  }

  dfs(0);
  return ans;
};
console.log(
  "result",
  minimumFuelCost(
    [
      [3, 1],
      [3, 2],
      [1, 0],
      [0, 4],
      [0, 5],
      [4, 6],
    ],
    2
  )
);
