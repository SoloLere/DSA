//ARRAY IMPLEMENTATION

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.len = k;
    this.size = 0;
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(k);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.len;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.len;
    this.size--;
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.arr[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.arr[(this.rear - 1) == -1 ? this.len - 1 : this.rear - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0 ;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
   return this.size === this.len;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */