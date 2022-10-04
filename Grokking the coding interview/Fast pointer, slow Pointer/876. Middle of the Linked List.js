/**
 * TC: O(2N) => O(N) SC: O(1)
 */
 var middleNode = function(head) {
    let length = 1;
    let node = head;
    let index = 0;
    while(node.next){
        length++
        node = node.next
    }
    
    if(length % 2 === 0){
        index = length / 2;
    }else{
        index = Math.floor(length/2)
    }
    
    node = head;
    for(let i = 1; i <= index; i++){
        node = node.next;
    }
    return node
};

/**
 * TC: O(N) SC: O(1)
 */

 var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow
};