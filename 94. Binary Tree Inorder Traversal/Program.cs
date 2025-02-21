public class TreeNode 
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) 
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution 
{
    public IList<int> InorderTraversal(TreeNode root) 
    {
        List<int> result = new List<int>();
        InorderHelper(root, result);
        return result;
    }
    
    private void InorderHelper(TreeNode node, List<int> result)
    {
        if (node == null)
            return;
            
        // Traverse left subtree
        InorderHelper(node.left, result);
        
        // Add current node value
        result.Add(node.val);
        
        // Traverse right subtree
        InorderHelper(node.right, result);
    }
}