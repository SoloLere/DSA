// Implementing a stack from a linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        const temp  = this.first;
        if (this.first === this.last){
            this.last = this.first = null;
        }
        else{
            this.first = this.first.next;
            temp.next = null
        }
        this.size--;
        return temp.value;
    }
}

const myStack = new Stack();
