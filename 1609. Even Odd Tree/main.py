# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def isEvenOddTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        
        queue = [root]
        level = 0
        while queue:
            if level % 2 == 0:
                if any(node.val % 2 == 0 for node in queue):
                    return False
                if any(queue[i].val >= queue[i + 1].val for i in range(len(queue) - 1)):
                    return False
            else:
                if any(node.val % 2 != 0 for node in queue):
                    return False
                if any(queue[i].val <= queue[i + 1].val for i in range(len(queue) - 1)):
                    return False
                
            queue = [child for node in queue for child in (node.left, node.right) if child]
            level += 1
        return True
    
if __name__ == '__main__':
    p = TreeNode(2, TreeNode(10, TreeNode(3, TreeNode(12), TreeNode(8))), TreeNode(4, TreeNode(7, TreeNode(6)), TreeNode(9, None,TreeNode(2))))
    s = Solution()
    print(s.isEvenOddTree(p))
    