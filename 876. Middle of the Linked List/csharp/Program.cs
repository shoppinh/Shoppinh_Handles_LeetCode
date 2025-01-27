namespace KienMac
{

    /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
    public class ListNode
    {
        public int _val;
        public ListNode _next;
        public ListNode(int val = 0, ListNode next = null)
        {
            _val = val;
            _next = next;
        }
    }
    public class Solution
    {
        public ListNode MiddleNode(ListNode head)
        {
            var start = head;
            var end = head;

            while (end && end._next != null) {
                start = start._next;
                end = end._next._next;
            }

            return start;

        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var solution = new Solution();
            var listNode = new ListNode(0, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));
            var middleNode = solution.MiddleNode();
            Console.WriteLine("Middle Node Value {0}", middleNode._val);

        }

    }
}
