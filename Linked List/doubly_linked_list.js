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
