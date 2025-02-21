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
 * @return {number[]}
 */
// Recursion
const inorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) {
      return;
    }
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};

// Stack
const inorderTraversal2 = function (root) {
  const result = [];
  const stack = [];

  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

// Morris traversal
const inorderTraversal3 = function (root) {
  const result = [];
  let current = root;

  while (current) {
    if (!current.left) {
      result.push(current.data);
      current = current.right;
    } else {
      // Find predecessor
      let predecessor = current.left;
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }
      // End finding predecessor

      if (!predecessor.right) {
        predecessor.right = current; // Create a thread
        current = current.left;
      } else {
        predecessor.right = null; // Break the thread
        result.push(current.data);
        current = current.right;
      }
    }
  }

  return result;
};

console.log(
  "inorderTraversal",
  inorderTraversal({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },

    right: {
      val: 3,
      left: null,
      right: null,
    },
  })
);
