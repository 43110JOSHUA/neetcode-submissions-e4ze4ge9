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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = new Array();

        function dfs(root, depth) {
            // Base case
            if (!root) {
                return;
            }

            // Add array if not yet
            if (!res.at(depth)) {
                res.push(new Array());
            }
            res.at(depth).push(root.val);

            dfs(root.left, depth + 1);
            dfs(root.right, depth + 1);
        }
    
        dfs(root, 0);

        return res;
    }
}
