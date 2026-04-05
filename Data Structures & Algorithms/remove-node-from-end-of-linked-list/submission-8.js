/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let p1 = dummy;
        let p2 = head;

        // set up gap
        while (n > 0) {
            p2 = p2.next;
            --n;
        }

        // iterate p2 to the end
        while (p2) {
            p1 = p1.next;
            p2 = p2.next;
        }

        // remove
        p1.next = p1.next.next;

        return dummy.next;
    }
}
