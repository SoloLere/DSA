# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        cur, length = head, 0
        
        while cur:
            cur = cur.next
            length += 1
        
        
        def findNode(ind):
            cur, prev, count = head, None, 0
                        
            while count <= ind:
                nxt = cur.next
                prev = cur
                cur = nxt
                count += 1
                
            return prev.val
        
        def helper(l,r):
            if l > r: 
                return None
            m = (l + r) // 2
            
            node = TreeNode(findNode(m))
            node.left = helper(l, m-1)
            node.right = helper(m+1, r)
            
            return node
        
        return helper(0, length - 1)
                