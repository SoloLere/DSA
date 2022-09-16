class LinkedList {
    constructor(value) { // LL is initialized with a value
        this.head = {value, next : null}; // value: value === value
        this.tail = this.head;
    }

    // push to end of LL
    insert(val){
        // update tail
        const node = {value: val, next: null};
        this.tail.next = node;
        this.tail = node;
    }

    // delete the tail node
    remove(){
        // loop and find the node before the tail
        // node.next === tail

        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    // returns true or false
    contains(value){
        let currentNode = this.head;
        if (currentNode.value === value) return true;
        else {
            while (currentNode.value !== value){
                currentNode = currentNode.next;
                if (!currentNode) return false 
            }
            return true;
        }
    }

    // checks if a node is the head node of LL, return true/false
    isHead(node){
        return node.val === this.head.val;
    }

    isTail(node){
        return node.val === this.tail.val;
    }
}

const myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);

