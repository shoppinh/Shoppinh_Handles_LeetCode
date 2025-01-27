# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # Using two pointers to iterate through the list
        # Strategy: traverse linked list using two-pointers. Move one pointer by one and the other pointers by two. 
        # When the fast pointer reaches the end, the slow pointer will reach the middle of the linked list.
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    def printList(self, head):
        current = head
        while current:
            print(current.val)
            current = current.next
    
if __name__ == "__main__":
    s = Solution()
    nodes = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, ListNode(6))))))
    s.printList(s.middleNode(nodes))