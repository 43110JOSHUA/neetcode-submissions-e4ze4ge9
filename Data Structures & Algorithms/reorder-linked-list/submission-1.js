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
     * @return {void}
     */
    reorderList(head) {
        // Index all but first node
        const nodes = new Array();

        let p0 = head.next;
        while (p0) {
            nodes.push(p0);
            p0 = p0.next;
        }

        // Create pattern
        let p1 = 0;
        let p2 = nodes.length - 1;
        let cur_node = head;

        while (p2 >= p1) {
            // Edge case: nodes is odd
            if (p2 == p1) {
                cur_node.next = nodes[p1];
                ++p1;
                cur_node = cur_node.next;
            }
            else {
                cur_node.next = nodes[p2];
                --p2;
                cur_node = cur_node.next;

                cur_node.next = nodes[p1];
                ++p1;
                cur_node = cur_node.next;
            }
        }

        cur_node.next = null;
    }
}
