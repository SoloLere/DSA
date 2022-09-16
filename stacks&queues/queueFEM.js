class Queue {
    constructor(){
        this._storage = {};
        this._length = 0;
        this._headIndex = 0; // helps to keep track of index
    }
    enqueue(val) {
        this._storage[this._length + this._headIndex] = val;
        this._length++; 
    }
    dequeue(){
        if (this._length) { 
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstVal;
        }
    }
    peek(){
        return this._storage[this._headIndex];
    }
}
const myQ  = new Queue();

myQ.enqueue('zero');
myQ.enqueue('one');