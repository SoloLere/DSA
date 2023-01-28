/*
TC: O(N), SC: O(N)
*/
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-Infinity);
    let result = dummy;
    let carry = 0;
    
    while(l1 || l2 || carry){
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let sum = (l1Val + l2Val + carry) % 10;
        result.next =  new ListNode(sum);
        result = result.next;
        carry = Math.floor((l1Val + l2Val + carry) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
};