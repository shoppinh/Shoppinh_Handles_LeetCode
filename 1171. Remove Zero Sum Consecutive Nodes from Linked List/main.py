# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
   
    def removeZeroSumSublists(self,head):
        def print_list_node(node):
            while node:
                print(node.val)
                node = node.next
        
        dummy = ListNode()  # Create a dummy node
        dummy.next = head

        prefix_sum = 0
        prefix_map = {}  # Dictionary to store prefix sums

        node = dummy
        while node:
            prefix_sum += node.val
            print("Node val",node.val)
            print("Dummy before")
            print_list_node(dummy)

            if prefix_sum in prefix_map:
                # Remove nodes between the two prefix sums
                start = prefix_map[prefix_sum].next
                temp_sum = prefix_sum
                while start != node:
                    temp_sum += start.val
                    del prefix_map[temp_sum]
                    start = start.next
                prefix_map[prefix_sum].next = node.next
            else:
                prefix_map[prefix_sum] = node
                
            print("Dummy after")
            print_list_node(dummy)

            node = node.next

        return dummy.next
    
    
if __name__ == "__main__":
    s = Solution()
    # s.removeZeroSumSublists(ListNode(1,ListNode(2, ListNode(-3, ListNode(3, ListNode(1))))))
    # s.print_list_node(s.convert_list_to_nodes([1,-1]))
    # s.print_list_node()
    # print(s.convert_nodes_to_list(ListNode(1, ListNode(-1))))
    # list = [1,-1]
    # print(reversed(list[:-1]))
    my_list = [1,2,3,4]
    a = my_list
    a[0] = 3
    print(my_list)
