/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head - The head of the linked list
 * @param {number} val - The value to remove
 * @return {ListNode} - The head of the modified linked list
 */
var removeElements = function (head, val) {
  // Create a dummy node to handle edge cases and duplicated list node to return after traversing
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      // Skip the node with the value to remove
      current.next = current.next.next;
    } else {
      current = current.next; // Move to the next node
    }
  }

  return dummy.next; // Return the new head
};

// Using three pointers
/**
 * @param {ListNode} head - The head of the linked list
 * @param {number} val - The value to remove
 * @return {ListNode} - The head of the modified linked list
 */
var removeElements2 = function (head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  let next = null;

  while (current !== null) {
    if (current.val === val) {
      // Skip the node with the value to remove
      next = current.next;
      prev.next = next;
    } else {
      prev = prev.next;
    }
    current = current.next; // Move to the next node
  }

  return dummy.next; // Return the new head
};
