// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  for(let i = 0; i < n; i++){
      fast = fast.next
  }
  if(!fast){
      return head.next
  }
  while(fast.next){
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return head
};