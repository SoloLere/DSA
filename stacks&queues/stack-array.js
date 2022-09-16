// Implementing a stack from an array
// the only methods that will be used are, PUSH and POP
// not unshift and shift
/*
    why PUSH and POP?
    Because they are more efficient than shift and unshift
    which has TC: O(N) because of the re-indexing
*/
const stack = [];
stack.push('zero')
stack.push('one')
stack.push('two')
stack.pop();