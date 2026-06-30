# Definition for singly-linked list.
from typing import Optional

class ListNode(object):
    def __init__(self, x: int) -> None:
        self.val: int = x
        self.next: Optional['ListNode'] = None

class Solution(object):
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        """
        :type head: ListNode
        :rtype: bool
        """
        # Floyd's cycle-finding algorithm
        if not head or not head.next:
            return False
        slow = head
        fast = head.next
        while slow != fast:
            if not fast or not fast.next:
                return False
            assert slow is not None
            assert fast is not None
            slow = slow.next
            fast = fast.next.next
        return True
            
        
    
# Test cases
if __name__ == "__main__":
    s = Solution()
    p = ListNode(3)
    p.next = ListNode(2)
    p.next.next = ListNode(0)
    p.next.next.next = ListNode(-4)
    p.next.next.next.next = p.next
    print(s.hasCycle(p))