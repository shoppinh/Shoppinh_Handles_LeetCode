# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        def printList(head):
            while head is not None:
                print(head.val)
                head = head.next
        result = None
        while head is not None:
            result = ListNode(head.val,result)
            head = head.next
        printList(result)
        return result
    
if __name__ == '__main__':
    s = Solution()
    s.reverseList(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5))))))