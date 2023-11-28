# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        queue = [(root, targetSum)]
        
        while queue:
            node, val = queue.pop()
            
            if node.val == val and not node.left and not node.right:
                return True
            
            if node.left:
                queue.append((node.left, val - node.val))
                
            if node.right:
                queue.append((node.right, val - node.val))
                
        return False