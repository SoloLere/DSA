/*
TC: O(N), SC: O(1)
*/

var oddEvenList = function(head) {
    if (!head) return head;
    
    let odd = head;
    let oddHead = head;
    let even = head.next;
    let evenHead = head.next;
    
    while(even && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return oddHead;
}