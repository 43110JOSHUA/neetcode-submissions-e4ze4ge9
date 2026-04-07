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
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head;
        let slow = head;

        while (fast) {
            fast = fast.next;
            if (slow == fast) {
                return true;
            }
            // Increment
            if (fast) {
                fast = fast.next;
            }
            slow = slow.next;
        }

        return false;
    }
}
