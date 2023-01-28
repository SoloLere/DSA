/*
TC: O(N), SC: O(1)
*/

var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(-Infinity, head);
    let returnHead = dummyNode;
    let tail = head;
    let count = 0;
    
    while(count < n){
        count++;
        tail = tail.next;
    }
    
    let removeNode = head;
    let prev = dummyNode;
    
    while(tail){
        tail = tail.next;
        prev = prev.next;
        removeNode = removeNode.next;
    }
    
    prev.next = removeNode.next;
    return returnHead.next;
};