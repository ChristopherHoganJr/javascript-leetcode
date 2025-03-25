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

var reverseList = function (head) {
  // If list is empty or has only 1 element, return head
  if (head === null || head.next === null) return head;

  // pointer_a is the previous node
  let pointer_a = head;
  // pointer_b is the current node
  let pointer_b = head.next;
  // pointer_c will temporarily hold the next node
  let pointer_c = null;

  // disconnect the head node from the list
  head.next = null;

  // Iterate the list
  while (pointer_b !== null) {
    // save the next node before disconnecting it
    pointer_c = pointer_b.next;
    // reverse the current node's pointer
    pointer_b.next = pointer_a;
    // move the pointers forward
    pointer_a = pointer_b;
    pointer_b = pointer_c;
  }

  // return the new head
  return pointer_a;
};
