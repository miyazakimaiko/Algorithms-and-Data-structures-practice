class MaxBinaryHeap {
    constructor() {
        this.heap = [41,39,33,18,27,12];
    }
    // INSERT PSEUDOCODE
    // Push the value into the values property on the heap
    // Bubble Up:
    // - Create a variable called index which is the length of the values property - 1
    // - Create a variable called parentIdx which is the floor of (index - 1) / 2
    // - Keep looping as long as the values element at the parentIdx is less than the values element at the child index
    //   - Swap the value of the values element at the parentIdx with the value of the element property at the child index
    //   - Set the index to be the parentIdx, and start over
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let targetIdx = this.heap.length - 1;
        let target = this.heap[targetIdx]
        while(targetIdx > 0){
            let parentIdx = Math.floor((targetIdx - 1) / 2);
            let parent = this.heap[parentIdx]
            if (target > parent) {
                this.heap[parentIdx] = target;
                this.heap[targetIdx] = parent;
                targetIdx = parentIdx;
            }
            if (target <= parent) break;
        }
    }
    // REMOVEING PSEUDOCODE
    // Swap the first value in the heap property with the last one
    // Pop from the values property, so yo ucan return the value at the end.
    // Have the new root "sink down" to the correct spot
    // - Your parent index starts at 0 (the root)
    // - Find the index of the left child
    // - Find the index of the right child
    // - If the left or right child is greater than the element, swap/ If both children are larger, swap with the lergest child
    // - The child index you swapped to now becomes the now parent index.
    // - Keep looping and swapping until neither child is larger than the element
    // Return the removed element.
    removeMax() {
        let removed = this.heap[0];
        let end = this.heap.pop();
        this.heap[0] = end;
        this.heap.sinkDown();
        return removed;
    }
    sinkDown() {
        let targetIdx = 0;
        let target = this.heap[targetIdx];
        let leftChildIdx = targetIdx * 2 + 1;
        let rightChildIdx = targetIdx * 2 + 2;
        let leftChild = this.heap[leftChildIdx];
        let rightChild = this.heap[rightChildIdx];
        while (target < leftChild || target < rightChild) {
            if (leftChild > rightChild) {
                let temp = target;
                target = leftChild;
                leftChild = temp;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
console.log(heap);