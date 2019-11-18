class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return this.size++;
    }
    pop() {
        const remove = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
            this.size = 0;
        } else {
            const newFirst = this.first.next;
            remove.next = null;
            this.first = newFirst;
        }
        this.size--;
        return remove.val;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
        return this;
    }
    dequeue() {
        const remove = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = remove.next;
            remove.next = null;
        }
        this.size--;
        return remove.val;
    }
}

const q = new Queue();
console.log(q)