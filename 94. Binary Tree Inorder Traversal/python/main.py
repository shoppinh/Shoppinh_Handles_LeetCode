from typing import List, Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def traverse(node: Optional[TreeNode]):
            if node == None:
                return
            traverse(node.left)
            result.append(node.val)
            traverse(node.right)
            
        traverse(root)
        
        return result

if __name__=="__main__":
    s = Solution()
    node1 = TreeNode(1)
    node1.left = TreeNode(2)
    node1.right = TreeNode(3)
    print(s.inorderTraversal(node1))