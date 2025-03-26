/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  // If the list is empty or has only one node, it can't have a cycle
  if (head === null || head.next === null) return false;

  // Initialize two pointers at the start of the list
  // This will move one step at a time (slow pointer)
  let pointer_a = head;
  // This will move two steps at a time (fast pointer)
  let pointer_b = head;

  // Traverse the list while the fast pointer and its next node aren't null
  while (pointer_b !== null && pointer_b.next !== null) {
    // Move slow pointer by 1 step
    pointer_a = pointer_a.next;
    // Move fast pointer by 2 steps
    pointer_b = pointer_b.next.next;

    // If the fast and slow pointers meet, there's a cycle
    if (pointer_a == pointer_b) return true;
  }

  // If we reach the end of the list, there's no cycle
  return false;
};
