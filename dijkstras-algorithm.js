class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vert) {
        if (!this.adjacencyList[vert]) {
            this.adjacencyList[vert] = [];
        }
    }
    addEdge(vert1, vert2, weight) {
        this.adjacencyList[vert1].push({node:vert2, weight});
        this.adjacencyList[vert2].push({node:vert1, weight});
    }
    // The approach
    // 1. Everytime we look to visit a new node, we pick the node with
    // the shortest known distance to visit first.
    // 2. Once we've moved to the new node we're going to visit, we look at each of its neighbors
    // 3. For each neighbouring node, we calculate the distance by summing the total edge
    // that lead to the node we're checking from the starting node.
    // If the new total distance to a node is less than the previous total,we store
    // the new shorter distance for that node.

    // DOESN'T WORK YET!!!
    Dijkstra(start, finish) {
        const orderedPaths = new PriorityQueue();
        const distances = {};
        const prev = {};
        let shortest;
        let result = [];
        for (let vert in this.adjacencyList) {
            if (vert === start) {
                distances[vert] = 0;
                orderedPaths.enqueue(vert, 0);
            } else {
                distances[vert] = Infinity;
                orderedPaths.enqueue(vert, Infinity);
            }
            prev[vert] = null;
        }
        while (orderedPaths.values.length) {
            shortest = orderedPaths.dequeue().val;
            if (shortest === finish) {
                // Done
                while (prev[shortest]) {
                    result.push(shortest);
                    shortest = prev[shortest];
                }
                break;
            }
            if (shortest || distances[shortest] !== Infinity) {
                for (let neighbor in this.adjacencyList[shortest]) {
                    let nextStop = this.adjacencyList[shortest][neighbor];
                    let target = distances[shortest] + nextStop.weight;
                    let nextNeighbor = nextStop.node;
                    if (target < distances[nextNeighbor]) {
                        distances[nextNeighbor] = target;
                        prev[nextNeighbor] = shortest;
                        orderedPaths.enqueue(nextNeighbor, target);
                    }
                }
            }
        }
        return result.concat(shortest).reverse();
    }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g);
