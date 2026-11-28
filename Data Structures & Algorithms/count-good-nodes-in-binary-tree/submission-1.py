# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        count = 0
        def dfs(path, root):
            nonlocal count

            if not root:
                return
            
            path.add(root.val)
            if (max(path) <= root.val):
                count += 1
            
            dfs(path.copy(), root.left)
            dfs(path.copy(), root.right)
        
        dfs(set(), root)
        return count