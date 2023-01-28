/**
 * TC: O(2N) => O(N) SC: O(1)
 */
var reorderList = function(head) {
    let fast = head, slow = head, start = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let reversedMidPoint = reverse(slow);

    while(reversedMidPoint.next){
        let startNext = start.next;
        let reversedMidPointNext = reversedMidPoint.next;
        start.next = reversedMidPoint;
        reversedMidPoint.next = startNext;
        start = startNext;
        reversedMidPoint = reversedMidPointNext;
    }
    return head
};

function reverse(head){
    let prev = null, next;
    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}