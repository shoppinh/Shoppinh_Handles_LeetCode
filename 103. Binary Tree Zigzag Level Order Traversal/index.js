/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Using BFS

// Runtime Optimized
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let level = 0;
  while (queue.length) {
    const size = queue.length;
    const levelArr = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (level % 2 === 0) {
        levelArr.push(node.val);
      } else {
        levelArr.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (levelArr.length) {
      result.push(levelArr);
    }
    level++;
  }
  return result;
};

const input = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
};

console.log("zigzagLevelOrder", zigzagLevelOrder(input));
