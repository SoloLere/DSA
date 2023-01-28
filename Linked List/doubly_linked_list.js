// using constructor function
function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

// using ES6 classes 
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val){
        const newNode = new Node(val);
        if (!this.head){//this.length === 0
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        const tail = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return tail;
    }
    shift(){
        if(!this.head) return undefined;
        let head = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = head.next;
            this.head.prev = null;
            head.next = null;
        }
        this.length--;
        return head;
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let start, node;
        if (index <= this.length/2){
            // console.log('start');
            start = 0;
            node = this.head;
            while(start !== index){
                node = node.next;
                start++;
            }
        }
        else{
            // console.log('end');
            start = this.length - 1;
            node = this.tail;
            while(start !== index){
                node = node.prev;
                start--;
            }
        }
        return node;
    }
    set(index, val){
        let node = this.get(index);
        if(node){
            node.val = val;
            return true
        }
        else{
            return false;
        }
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        else if (index === 0) return !!this.unshift(val);
        else if (index === this.length) return !!this.push(val);
        else{
            let node = this.get(index - 1);
            let newNode = new Node(val);
            
            node.next.prev = newNode , newNode.next = node.next;
            newNode.prev = node , node.next = newNode;
            this.length++;
            return true;
        }
    }
    remove(index){
        if (index < 0 || index >= this.length) return false;
        else if (index === 0) return !!this.shift();
        else if (index === this.length - 1) return !!this.pop();
        else {
            let node = this.get(index);

            node.prev.next = node.next;
            node.next.prev = node.prev;

            node.prev = null;
            node.next = null;
            this.length--;
            return node
        }
    }
    reverse(){
        let node = this.tail;
        this.tail = this.head;
        this.head = node;

        let prev = null;
        while(node){
            node.next = node.prev;
            node.prev = prev;
            prev = node;
            node = node.next;
        }
        return this;
    }
    print(){
        let arr = [];
        let node = this.head;
        while (node){
            arr.push(node.val);
            node = node.next
        }
        console.log(arr);
    }
    
    
}

const list = new DoublyLinkedList();
// list.push(1);
// list.push(2)
// list.push(3);
// list.push(4);
// list.push(5);

// Design Doubly linked list for leecode
var Node = function(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length || this.length === 0) return -1;
    else if (index === 0) return this.head.val;
    else if (index === this.length -1) return this.tail.val;
    else if(index < this.length / 2){
        let node = this.head;
        let count = 0;
        while(count < index){
            node = node.next;
            ++count;
        }
        return node.val;
    }
    else{
        let node = this.tail
        let count = this.tail - 1;
        while(count !== index){
            node = node.prev;
            --count;
        }
        return node.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }
    else{
        node.next = this.head;
        this.head.prev = node;
        node.prev = null;
        this.head = node;
    }
    this.length++;
    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    if(!this.tail){
        this.head = node;
        this.tail = node;
    }
    else{
        node.prev = this.tail;
        this.tail.next = node;
        node.next = null;
        this.tail = node;
    }
    this.length++;
    return this;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new Node(val);
    if (index > this.length) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);
    else if(index < this.length / 2){
        let node = this.head;
        let count = 0;
        while(count < index){
            node = node.next;
            ++count;
        }
        let newNode = new Node(val);
        node.prev.next = newNode;
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev = newNode;
    }
    else{
        let node = this.tail
        let count = this.tail - 1;
        while(count !== index){
            node = node.prev;
            --count;
        }
        let newNode = new Node(val);
        node.prev.next = newNode;
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev = newNode;
    }
    this.length++;
    return this;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length || !this.head) return;
    else if(index < this.length / 2){
        let node = this.head;
        let count = 0;
        while(count < index){
            node = node.next;
            ++count;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    else{
        let node = this.tail
        let count = this.tail - 1;
        while(count !== index){
            node = node.prev;
            --count;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    this.length--;
    return this;

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */