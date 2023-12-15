# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        tail = head
        count = 0
        
        while count < n:
            count+=1
            tail = tail.next
            
        cur = head
        prev = dummy
        
        while tail:
            tail = tail.next
            cur = cur.next
            prev = prev.next
            
            
        prev.next = cur.next
        
        return dummy.next