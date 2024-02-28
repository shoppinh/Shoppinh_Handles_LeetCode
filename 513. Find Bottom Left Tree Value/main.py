# Definition for a binary tree node.
# Solution: Using dfs, assign the queue after each iteration and pick out the first element of the queue.

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def find_bottom_left_value(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        queue = [root]
        while queue:
            result = queue[0].val
            print("result:", result)
            queue = [child for node in queue for child in (node.left, node.right) if child]
            print("queue:", queue),
        return result
    
if __name__ == '__main__':
    p = TreeNode(1, TreeNode(2, TreeNode(4)), TreeNode(3, TreeNode(5, TreeNode(7)), TreeNode(6)))
    s = Solution()
    print(s.find_bottom_left_value(p))