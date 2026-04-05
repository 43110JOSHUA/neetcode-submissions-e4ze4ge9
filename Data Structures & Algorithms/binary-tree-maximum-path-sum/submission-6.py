# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        dp = dict() # node -> max_dfs(node)
        def max_dfs(node):
            if not node:
                return 0
            if node in dp:
                return dp[node]

            dp[node.left] = max_dfs(node.left)
            dp[node.right] = max_dfs(node.right)
            return max(node.val, node.val + max_dfs(node.left), node.val + max_dfs(node.right))
        
        # Run algorithm on every node
        self.cur_max = root.val

        def dfs(node):
            if not node:
                return 0
            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)
            self.cur_max = max(self.cur_max, node.val + left + right)
            return node.val + max(left, right)

        dfs(root)
        return self.cur_max