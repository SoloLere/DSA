// Implementing a Queue from an array
// the only methods that will be used are, unshift and pop or push and shift
/*
    Both options are not efficient because
    TC: O(N) due to re-indexing
*/
const queue = [];
queue.push('zero')
queue.push('one')
queue.push('two')
queue.shift();