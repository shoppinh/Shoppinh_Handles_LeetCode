# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def mergeInBetween(self, list1, a, b, list2):
        """
        :type list1: ListNode
        :type a: int
        :type b: int
        :type list2: ListNode
        :rtype: ListNode
        """
        def printList(head):
            while head is not None:
                print(head.val)
                head = head.next
                
        # Approach: Get the b+1 node and a-1 node, set last node of list 2's next to b+1 node, then set a-1 node's next to list 2
        b_plus = ListNode()
        a_minus= ListNode()
        first_list = list1
        second_list = list2
        # get the b+1 node and a-1 node
        for i in range(0, b+2):
            if (i == a-1):
                a_minus = first_list
            elif (i == b+1):
                b_plus = first_list
            first_list = first_list.next
            
        # loop over the list 2 and set the next of last node to b+1 node
        while second_list.next is not None:
            second_list = second_list.next
        second_list.next = b_plus
        
        # set a+1.next = list2
        a_minus.next = list2
        # printList(a_minus)
        printList(list1)
        return list1
        
        
if __name__ == '__main__':
    s = Solution()
    s.mergeInBetween(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5))))), 2,3, ListNode(99, ListNode(22, ListNode(33))))