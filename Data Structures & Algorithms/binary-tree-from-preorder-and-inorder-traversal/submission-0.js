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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder.length) return null;

        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preIndex = 0;
        function helper(left, right) {
            if (left > right) return null;

            const val = preorder[preIndex++];
            const root = new TreeNode(val);
            const mid = inorderMap.get(val);

            root.left = helper(left, mid - 1);
            root.right = helper(mid + 1, right);

            return root;
        }

        return helper(0, inorder.length - 1);
    }
}
