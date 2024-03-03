# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    # Solution: Using two pointers, first and second, where first is n nodes ahead of second. When first reaches the end, second is at the node to be removed. We have to
    # find the node before the node to be removed and assign the next node of the second node to the next node of the next node 
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        def printList(head):
            while head is not None:
                print(head.val)
                head = head.next
        dummy = ListNode(0, head)
        second = dummy

        # get the length of the linked list
        length = 0
        first = head
        while first is not None:
            length += 1
            first = first.next
        
        # get the node before the node to be removed
        for i in range(1, length - n + 1):
            second = second.next
        # Assign the next node of the second node to the next node of the next node or in other words, remove the next node of the second node.
        second.next = second.next.next
        print("second 2")
        printList(second)
        return dummy.next
    


# Test cases
if __name__ == '__main__':
    s = Solution()
    
    # Test cases
    # p = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    # s.removeNthFromEnd(p, 2)
    # p = ListNode(1)
    # s.removeNthFromEnd(p, 1)
    # p = ListNode(1, ListNode(2))
    # s.removeNthFromEnd(p, 1)
    # p = ListNode(1, ListNode(2))
    # s.removeNthFromEnd(p, 2)
    p = ListNode(1, ListNode(2, ListNode(3)))
    s.removeNthFromEnd(p, 3)
    
    