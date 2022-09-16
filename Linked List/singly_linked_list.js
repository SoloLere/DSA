class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        } 
        this.length++;
        return this; 
    }
    pop(){ 
        if(!this.head){
            return undefined; 
        }else{
            let current = this.head;
            let newTail = current;  
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--
        if (this.length === 0) this.tail = null;
        return current
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    get(index){
       if (index < 0 || index >= this.length) return null;  
       let counter = 0;
       let current = this.head;
       while(counter < index){
            current = current.next;
            counter++;
       }
       return current;
    }
    set(index, val){
        let current = this.get(index);
        if (!current) return false;
        current.val = val;
        return true;
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        else if (index === 0) return this.shift(index);
        else if (index === this.length - 1) return this.pop(index);
        else{
            let prev = this.get(index - 1);
            let cur = prev.next;
            prev.next = cur.next;
            this.length--;
            return cur;
        }
    }
    reverse(){
        if (!this.head || this.length === 1) return this;
        else{
            let node = this.head;
            this.head = this.tail;
            this.tail = node;
            let next = null;
            let prev = null;
            while(node){
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;                
            }
            return this;
        }
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

var list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('solomon');
list.push('Oseni');
console.log(list);
list.print();
list.reverse();
list.print();