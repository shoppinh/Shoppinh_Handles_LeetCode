/**
 * Definition for singly-linked list.

 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Method 1: Iterative
var reverseList = function (head) {
  let result = null;
  while (head !== null) {
    result = new ListNode(head.val, result);
    head = head.next;
  }
  return result;
};

// Method 2: Recursive
var reverseList2 = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = reverseList2(head.next);
  // Reverse the linked list
  head.next.next = head;
  // Set the next of the current node to null
  head.next = null;
  return newHead;
};

// Method 3: Using 3 pointers
var reverseList3 = function (head) {
  let prev = null;
  let curr = head;
  let next = curr.next;
  while (curr !== null) {
    next = curr.next;
    // Reverse the linked list
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

console.log(reverseList2(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
