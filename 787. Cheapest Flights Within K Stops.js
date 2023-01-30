/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

const findCheapestPrice = (n, flights, src, dst, K) => {
  const adjList = Array(n)
    .fill(0)
    .map(() => []);
  for (const [u, v, w] of flights) {
    adjList[u].push([v, w]);
  }

  const pq = [[0, src, K + 1]];
  while (pq.length) {
    const [cost, city, stops] = pq.shift();
    if (city === dst) {
      return cost;
    }
    if (stops > 0) {
      for (const [neighbor, price] of adjList[city]) {
        pq.push([cost + price, neighbor, stops - 1]);
      }
      pq.sort((a, b) => a[0] - b[0]);
    }
  }

  return -1;
};

const findCheapestPriceCustomized = (n, flights, src, dst, k) => {
  let map = {};

  for (let [x, y, z] of flights) {
    if (!map[y]) map[y] = [];
    map[y].push([x, y, z]);
  }

  let min = Infinity;

  let iterate = (end, sum, count) => {
    if (count > k || sum > min) return;

    if (end == src) {
      min = Math.min(min, sum);
      return;
    }
    if (!map[end]) return;

    for (let [x, y, z] of map[end]) {
      iterate(x, sum + z, count + 1);
    }
  };
  iterate(dst, 0, -1);
  return min == Infinity ? -1 : min;
};

const result = findCheapestPrice(
  5,
  [
    [0, 1, 5],
    [1, 2, 5],
    [0, 3, 2],
    [3, 1, 2],
    [1, 4, 1],
    [4, 2, 1],
  ],
  0,
  2,
  2
);
console.log(
  "🚀 ~ file: 787. Cheapest Flights Within K Stops.js:41 ~ result",
  result
);
