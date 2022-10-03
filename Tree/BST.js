class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
/* Recursive pattern
    innerInsert(node, nodeB) {
            if (node.value === nodeB.value) return undefined;
            if (node.value > nodeB.value){
               if (!nodeB.right){
                   nodeB.right = node;
                   return this;
               }
               else {
                   // recursion
                   return this.innerInsert(node, nodeB.right)
               }
            }
            else if (node.value < nodeB.value){
                if (!nodeB.left){
                   nodeB.left = node;
                   return this;
               }
               else {
                   // recursion
                   return this.innerInsert(node, nodeB.left)
               }
            }
                
    }
    
    insert(value){
       const node = new Node(value);
    
        if (!this.root){
            this.root = node;
            return this;
        }
        else{
            const nodeB = this.root;
            return this.innerInsert(node,nodeB)
           
        }
    }
*/

    // Iterative pattern
    insert(value){
       const node = new Node(value);
    
        if (!this.root){
            this.root = node;
            return this;
        }
        else{
            let nodeB = this.root;
            while (true){
                if (value === nodeB.value) return undefined;
                else if (value > nodeB.value){
                    if (!nodeB.right){
                        nodeB.right = node;
                        return this
                    }
                    else{
                        nodeB = nodeB.right
                    }
                }
                else if (value < nodeB.value){
                    if (!nodeB.left){
                        nodeB.left = node;
                        return this
                    }
                    else{
                        nodeB = nodeB.left
                    }
                }
            }
           
        } 
    }

    find(value){
        if (!this.root) return false;
        let node = this.root;
        let found = false;
        while(node && !found){
            if (value > node.value){
                node = node.right;
            }
            else if (value < node.value){
                node = node.left;
            }
            else{
                found = true;
                break;
            }
        }
        if (!found) return false;
        return node;
        
    }
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while (queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFS_PreOrder(){
        const data = [];
        let node = this.root;
        
        function traverse(node){
            data.push(node.value)
            if(node.left)  traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }
    DFS_PostOrder(){
        const data = [];
        let node = this.root;
        
        function traverse(node){
            if(node.left)  traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(node);
        return data;
    }
    DFS_InOrder(){
        const data = [];
        let node = this.root;
        
        function traverse(node){
            if(node.left)  traverse(node.left);
            data.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }
}

/*
            10
        6         15
    2      8            20
       3
*/

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(2)
tree.insert(3)
tree.insert(8)
tree.insert(20)