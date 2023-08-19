// Graph Implementation using adjacency List

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];

    } 

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2));
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1));
    }

    removeVertex(vertex){
        delete this.adjacencyList[vertex];

        for(let list in this.adjacencyList){
            list.filter(el => el !== vertex);
        }
    }
}