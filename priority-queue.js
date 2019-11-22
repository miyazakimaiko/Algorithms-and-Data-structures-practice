class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.heap.push(node);
        this.bubbleUp(node, priority);
    }
    bubbleUp(node, priority) {
        let targetIdx = this.heap.length - 1;
        while(targetIdx > 0){
            let parentIdx = Math.floor((targetIdx - 1) / 2);
            let parent = this.heap[parentIdx];
            let parentPriority = parent.priority;
            if (priority < parentPriority) {
                this.heap[parentIdx] = node;
                this.heap[targetIdx] = parent;
                targetIdx = parentIdx;
            }
            if (priority >= parentPriority) break;
        }
    }
    dequeue() {
        let removed = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return removed;
    }
    sinkDown() {
        let targetIdx = 0;
        while (true) {
            let target = this.heap[targetIdx];
            let targetPriority = this.heap[targetIdx].priority;
            let leftChildIdx = targetIdx * 2 + 1;
            let rightChildIdx = targetIdx * 2 + 2;
            let left = this.heap[leftChildIdx];
            let right = this.heap[rightChildIdx];
            let swap = null;
            if (leftChildIdx < this.heap.length && targetPriority > left.priority){
                swap = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && targetPriority > right.priority
                && left.priority > right.priority){
                swap = rightChildIdx;
            }
            if (swap === null) break;
            this.heap[targetIdx] = this.heap[swap];
            this.heap[swap] = target;
            targetIdx = swap;
        }
    }
}

let heap = new PriorityQueue();
console.log(heap);