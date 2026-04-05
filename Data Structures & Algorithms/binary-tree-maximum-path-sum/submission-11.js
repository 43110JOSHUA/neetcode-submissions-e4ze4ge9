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
     * @return {number}
     */
    maxPathSum(root) {
        let max = root.val;

        function dfs(root) {
            if (!root) {
                return 0;
            }

            const leftMax = Math.max(dfs(root.left), 0);
            const rightMax = Math.max(dfs(root.right), 0);

            max = Math.max(max, root.val + leftMax + rightMax);

            return root.val + Math.max(leftMax, rightMax);
        }
        dfs(root);
        return max;
    }
}
