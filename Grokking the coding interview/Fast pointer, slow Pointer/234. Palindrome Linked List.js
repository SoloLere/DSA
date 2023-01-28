/*
TC: O(2N) => O(N), SC: O(1)
*/

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let start = head;

    // reverse function
    const reverse = function(head){
        let prev = null;
        let node = head;
        let next;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    }
    
    // get the middle
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let reverse_head = reverse(slow) 
    let copy_reverse_head = reverse_head;
    
    // compare the nodes
    while(reverse_head){
        if (start.val !== reverse_head.val) return false;
        reverse_head = reverse_head.next;
        start = start.next;
    }

    // reverse the middle to the original state
    reverse(copy_reverse_head);
    
    return true;
    
};