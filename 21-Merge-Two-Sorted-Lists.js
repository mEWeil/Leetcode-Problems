// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
function mergeTwoLists(l1, l2) {
   var mergedHead = { val : -1, next : null },
       crt = mergedHead;
   while(l1 && l2) {
       if(l1.val > l2.val) {
           crt.next = l2;
           l2 = l2.next;
       } else {
           crt.next = l1;
           l1 = l1.next;
       }
       crt = crt.next;
   }
   crt.next = l1 || l2;
   return mergedHead.next;
};