/*
TC: O(N), SC: O(1)
USING RECURSION
*/
var flatten = function(head) {
    if (head) flatten_rec(head);
    
    return head;
};

function flatten_rec(head){
    let curr = head;
    let tail = head;
    while(curr){
        let next = curr.next;
        let child = curr.child;
        
        if (child){
            let _tail = flatten_rec(child);
            
            _tail.next = next;
            if (next) next.prev = _tail;
            
            curr.next = child;
            child.prev = curr;
            
            curr.child = null;
            
            curr = _tail.next ? _tail.next : _tail;
        }
        else{
            curr = next;
        }
        
        if(curr) tail = curr;   
    }
    
    return tail;
}

/*
TC: O(N), SC: O(N)
USING STACKS
*/

var flatten = function(head) {
    let curr = head;
    let stack = [];
    while (curr){
        if (curr.child){
            if (curr.next) {
                curr.next.prev = null; 
                stack.push(curr.next);
            }
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }

        if (curr.next) curr = curr.next;
        else break;
    }

    while (stack.length > 0){
        curr.next = stack.pop();
        curr.next.prev = curr;
        while (curr.next) curr = curr.next;
    }

    return head
};