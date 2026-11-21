# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # iterate through root tree, whenever we encounter a node that matches the
        # value of the start of subroot, we start comparing

        def compare(root, subRoot):
            if (not root or not subRoot):
                if (root == subRoot): # no extra childen in root
                    return True
                else:
                    return False

            equal = False
            if root.val == subRoot.val:
                equal = True
            
            return equal and compare(root.left, subRoot.left) and compare(root.right, subRoot.right)
        
        def dfs(root):
            if not root:
                return False

            if (root.val == subRoot.val):
                if compare(root, subRoot) == True:
                    return True
            
            return dfs(root.left) or dfs(root.right)
        
        return dfs(root)