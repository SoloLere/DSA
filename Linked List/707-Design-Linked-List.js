var Node = function(val) {
    this.val = val;
    this.next = null;
};
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
    else {
        let node = this.head
        let count = 0;
        while (count < index){
            node = node.next;
            count++;
        }
        return node.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    if (!this.head){
        this.head = node;
        this.tail = node;
    }
    else {
        node.next = this.head;
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
    const node = new Node(val);
    if (!this.tail){
        this.head = node;
        this.tail = node;
    }
    else {
        this.tail.next = node;
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
    if (index === 0) return this.addAtHead(val);
    else if (index === this.length) return this.addAtTail(val);
    if (index > this.length) return;
    else{
        let newNode = new Node(val);
        let prev = this.head;
        let count = 1;
        while (count < index){
            prev = prev.next;
            count++;
        }
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length || !this.head) return;
    else if (index === 0){
        let current = this.head;
        this.head = current.next;
        this.length--;
        return this
    }
    else if (index === this.length -1){
        let current = this.head;
        let count = 1;
        while (count < index){
            current = current.next;
            count++;
        }
        current.next = null
        this.tail = current;
        this.length--;
        return this;
    }else{
        let prev = this.head;
        let count = 1;
        while (count < index){
            prev = prev.next;
            count++;
        }
        let delNode = prev.next;
        prev.next = delNode.next;
        this.length--; 
        return this;
    }
    
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