// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

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
var reverseList = function(head) {
  let [prev, current] = [null, head]
  while(current) {
      [current.next, prev, current] = [prev, current, current.next]
  }
  return prev
};