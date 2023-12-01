# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = prev = ListNode(None, head)
        cur, leftPrev, count = head, None, 1
        
        while count <= right:
            if count == left:
                leftPrev = prev
                
            prev = cur
            cur = cur.next
            count += 1
          
        prev.next = None
        sublist = self.reverse(leftPrev.next)
        leftPrev.next.next = cur
        leftPrev.next = sublist
        return dummy.next
    
    def reverse(self, l):
        prev = None;
        cur = l
        while cur:
            nxt = cur.next
            cur.next = prev
            prev =cur
            cur = nxt
            
        return prev
        