/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val)
{
    this.val = val;
    this.next = null;

}
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Tortoise and Hare Algorithm
var hasCycle = function(head) {
    let slow = head
    let fast = head

    while (fast?.next != null) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast){
            return true
        }
    }
    return false

    
};

const list = new ListNode(1)
list.next = new ListNode(3)
list.next.next = new ListNode(4)
list.next.next.next = new ListNode(5)
list.next.next.next.next = list.next

console.log(hasCycle(list))