/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxDistance(grid) {
  let n = grid.length;
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Push all the land into the queue
      if (grid[i][j] === 1) {
        queue.push([i,j]);
      }
    }
  }
  // If all the land or all the water, return -1
  
  if (queue.length === 0 || queue.length === n*n) return -1;
  // BFS
  let directions = [[-1,0],[0,-1],[1,0],[0,1]];
  let distance = -1;
  while (queue.length) {
    distance++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let position = queue.shift();
      let x = position[0], y = position[1];
      // Check all the 4 adjacent cell of the current position
      for(let p of directions) {
        let newX = x + p[0];
        let newY = y + p[1];
        // If the new position is valid and is water
        if (newX >= 0 && newX < n && newY >= 0 && newY < n && grid[newX][newY] === 0) {
          // Mark the new position as visited
          grid[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      }
    }
  }
  return distance;
}


console.log("🚀 ~ file: index.js:6 ~ maxDistance ~ maxDistance", maxDistance([[1,0,1],[0,0,0],[1,0,1]]))
