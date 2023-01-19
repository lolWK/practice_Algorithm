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
  if (head === null) return head;
  let prev = head;
  let cur = head.next;
  while (cur != null) {
    if (prev.val === cur.val) {
      prev.next = cur.next;
      cur = prev;
    }
    prev = cur;
    cur = cur.next;
  }
  return head;
};

var deleteDuplicates = function (head) {
  let cur = head;
  while (cur) {
    if (cur.next !== null && cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
