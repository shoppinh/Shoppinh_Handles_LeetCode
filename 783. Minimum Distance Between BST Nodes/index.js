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
 * @return {number}
 */

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

const minDiffInBST = function (root) {
  let min = Infinity;
  let prev = -Infinity;
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    min = Math.min(min, node.val - prev);
    prev = node.val;
    traverse(node.right);
  };
  traverse(root);
  return min;
};

console.log("minDiffInBST", minDiffInBST(input));