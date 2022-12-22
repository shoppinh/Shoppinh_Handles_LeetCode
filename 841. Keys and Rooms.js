/**
 * There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. 
 * Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
 * When you visit a room, you may find a set of distinct keys in it. 
 * Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock 
 * the other rooms.Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, 
 * return true if you can visit all the rooms, or false otherwise.
 * 
 * Input: rooms = [[1],[2],[3],[]]
 * Output: true
 * Explanation: 
  We visit room 0 and pick up key 1.
  We then visit room 1 and pick up key 2.
  We then visit room 2 and pick up key 3.
  We then visit room 3.
  Since we were able to visit every room, we return true.
 * 
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  // We use dfs to traverse the rooms
  const map = new Map();
  for (let i = 0; i < rooms.length; i++) {
    map.set(i, rooms[i]);
  }
  const visited = new Set();
  const stack = [0];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    for (let i = 0; i < map.get(node).length; i++) {
      stack.push(map.get(node)[i]);
    }
  }
  return visited.size === rooms.length;
};
