/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let node = head;
    
    // declare parameters prev, next
    let prev = null;
    
    while(node){
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};

// TC: O(N), SC: O(1)