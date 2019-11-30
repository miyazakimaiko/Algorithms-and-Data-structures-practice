class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }
    addEdge(vert1, vert2) {
        this.adjacencyList[vert1].push(vert2);
        this.adjacencyList[vert2].push(vert1);
    }
    removeEdge(v1,v2) {
        let filtered = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v1] = filtered;
        filtered = this.adjacencyList[v2].filter(v => v !== v1);
        this.adjacencyList[v2] = filtered;
    }
    removeVertex(vert) {
        while (this.adjacencyList[vert].length) {
            const removedVert = this.adjacencyList[vert].pop();
            this.removeEdge(vert, removedVert);
        }
        delete this.adjacencyList[vert];
    }
    DFRecursive(target) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; 
        const helper = (vert) => {
            if (!vert) return null;
            visited[vert] = true;
            result.push(vert);
            adjacencyList[vert].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return helper(neighbor)
                }
            });
        }
        helper(target);
        return result;
    }
    DFIterative(start) {
        const stack = [];
        const result = [];
        const visited = {};
        stack.push(start);
        while (stack.length) {
            let current  = stack.pop();
            visited[current] = true;
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    BreadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        while(queue.length) {
            let current = queue.shift();
            visited[current] = true;
            result.push(current)
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
// current = A
//queue = [E]
//result = [A,B]
//visited = [A=true,B=true, E=true]

let g = new Graph();
console.log(g);
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
