# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    # Approach 1: Recursion
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        result = None
        while head is not None:
            result = ListNode(head.val,result)
            head = head.next
        return result

# Approach 2: Iterative with swap
    def reverseList2(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        curr = head
        prev = None
        while curr is not None:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node

if __name__ == '__main__':

    s = Solution()
    s.reverseList(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5))))))
