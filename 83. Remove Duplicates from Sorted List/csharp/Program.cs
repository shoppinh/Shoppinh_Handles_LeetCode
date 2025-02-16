/**
 * Definition for singly-linked list.
 */

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}
public class Solution
{
    public ListNode DeleteDuplicates(ListNode head)
    {
        var dummy = new ListNode(0);
        dummy.next = head;
        var current = dummy.next;

        while (current != null && current.next != null)
        {
            if (current.next.val == current.val)
            {
                current.next = current.next.next
            }
            else
            {
                current = current.next
            }
        }

        return dummy.next

    }
}