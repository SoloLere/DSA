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
        temp = head
        stack = []
        
        while head:
            if (head.child):
                if (head.next != None):
                    stack.append(head.next)
                    
                head.next = head.child
                head.next.prev = head
                head.child = None
                
            else:
                if (head.next == None and len(stack)):
                    head.next = stack.pop()
                    head.next.prev = head
                    
            head = head.next
                    
        return temp
                    
        
        