# Definition for a binary tree node.


# Diameter of Binary Tree is the longest path between any two nodes in a tree. It is the largest of the following three quantities:
# 1. The diameter of the left subtree
# 2. The diameter of the right subtree
# 3. The longest path between nodes that goes through the root of the tree.( can be calculated as the sum of the heights of the left and right subtrees)
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution(object):
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.ans = 0
        def depth(node):
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            # Calculate the diameter of the tree
            self.ans = max(self.ans, left + right)
            # Return the depth of the tree
            return 1 + max(left, right)
        depth(root)
        return self.ans
    
if __name__ == '__main__':
    p = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
    s = Solution()
    print(s.diameterOfBinaryTree(p))