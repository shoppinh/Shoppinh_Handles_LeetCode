/**
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
 * The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] 
 * denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, 
 * and no vertex has an edge to itself. You want to determine if there is a valid path that exists from vertex 
 * source to vertex destination.Given edges and the integers n, source, and destination, 
 * return true if there is a valid path from source to destination, or false otherwise.
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
  - 0 → 1 → 2
  - 0 → 2
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
    let graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1]);
        graph[edges[i][1]].push(edges[i][0]);
    }
    let visited = new Set();
    let queue = [source];
    while (queue.length) {
        let node = queue.shift();
        if (node === destination) return true;
        visited.add(node);
        for (let i = 0; i < graph[node].length; i++) {
            if (!visited.has(graph[node][i])) {
                queue.push(graph[node][i]);
            }
        }
    }
    return false;
};