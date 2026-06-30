/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int x)
    {
        val = x;
        next = null;
    }
}
public class Solution
{
    public bool HasCycle(ListNode head)
    {
        var slow = head;
        var fast = head;
        while (fast?.next != null)
        {
            fast = fast.next.next;
            slow = slow.next;

            if (fast == slow)
            {
                return true;
            }
        }
        return false;

    }


}

public class Program
{
    public static void Main(string[] args)
    {
        var solution = new Solution();
        var node1 = new ListNode(1);
        var node2 = new ListNode(2);
        var node3 = new ListNode(3);
        var node4 = new ListNode(4);
        
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2; // Creates cycle

        Console.WriteLine(solution.HasCycle(node1));

    }
}

