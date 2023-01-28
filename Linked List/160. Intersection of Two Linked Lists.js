/*
TC: O(N + M), SC: O(1)
I'll go over each LL N+M times during which I'll spot the intersection or null.
*/

var getIntersectionNode = function(headA, headB) {
    let slowA = headA;
    let slowB = headB;
    
    while(slowA !== slowB){
        if(slowA){
            slowA = slowA.next;
        }
        else{
            slowA = headB;
        }
        if(slowB){
            slowB = slowB.next;
        }
        else{
            slowB = headA;
        }
    }
    return slowA;
};