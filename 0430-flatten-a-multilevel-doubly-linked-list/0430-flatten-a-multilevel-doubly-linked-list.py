"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if  head:
            self.helper(head)
            
        return head
    
    def helper(self,head):
            node = head
            prev = node.prev
            
            while node:
                if node.child:
                    childTail = self.helper(node.child)
                    temp = node.next
                    node.next = node.child
                    node.child.prev = node
                    node.child = None
                    childTail.next = temp
                    if temp:
                        temp.prev = childTail
                    
                prev = node
                node = node.next
                
            return prev
                    
        
        