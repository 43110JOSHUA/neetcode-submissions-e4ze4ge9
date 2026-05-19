/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(l, r) {
            if ((!l && r) || !r && l) { // One is null
                return false;
            }
            else if (!l && !r) { // both are null
                return true;
            }
            else if (l.val != r.val) {
                return false;
            }
            else {
                return dfs(l.left, r.left) && dfs(l.right, r.right);
            }
        }

        return dfs(p, q);
    }
}
