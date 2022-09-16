class Stack {
    constructor(){
        this._storage = {};
        this._length = 0;
    }
    push(val){
        if (!val) throw new Error('Add an arguement')
        this._storage[this._length] = val;
        this._length++;
    }
    pop(){
        if (this._length){
           delete this._storage[this._length - 1]; // this._storage[this._length - 1] = undefined
            this._length--;
            return this._storage[this._length - 1]; 
        }
        else{
            throw new Error ("Empty Stack");
        }
    }
    peek(){
        if (this._length){
            return this._storage[this._length - 1]; 
        }
        // if I don't add an else statement, the function returns undefined;
        else{
            throw new Error ("Empty Stack");
        }
    }
}

const myStack = new Stack();
// myStack.push('zero');
// myStack.push('one');