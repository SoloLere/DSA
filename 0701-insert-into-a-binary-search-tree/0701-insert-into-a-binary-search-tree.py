# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        newNode = TreeNode(val)
        
        if not root:
            return newNode
        
        cur = root
        prev = None
        
        while cur:
            if (val < cur.val):
                prev = cur
                cur = cur.left
                
            else:
                prev = cur
                cur = cur.right
                
        if (val < prev.val): 
            prev.left = newNode
            
        else:
            prev.right = newNode
            
        return root