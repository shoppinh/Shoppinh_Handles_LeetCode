/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy.next;

  while (current !== null && current.next !== null) {
    if (current.next.val === current.val) {
      // Skip the node with the value to remove
      current.next = current.next.next;
    } else {
      current = current.next; // Move to the next node
    }
  }

  return dummy.next;
};
