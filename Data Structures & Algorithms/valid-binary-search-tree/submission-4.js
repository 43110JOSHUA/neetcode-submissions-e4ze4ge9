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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function dfs(root, lb, ub) {
            if (!root) {
                return true;
            }
            if (!(root.val > lb && root.val < ub)) {
                return false;
            }
            return dfs(root.left, lb, root.val) && dfs(root.right, root.val, ub);
        }

        let cur = root;
        return dfs(cur, -Infinity, Infinity);
    }
}
