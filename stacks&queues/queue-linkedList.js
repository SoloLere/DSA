// Implementing a queue from a linked list

// Add to end, remove from beginning is more optimized 
// compared to, Add to beginning remove from end
// because to remove from the end, I have to traverse the whole list O(N)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        const temp = this.first;
        if(this.first === this.last){
            this.first = this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        this.size--;
        return temp.value;
    }
}