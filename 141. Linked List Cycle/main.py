# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def hasCycle(self, head):
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