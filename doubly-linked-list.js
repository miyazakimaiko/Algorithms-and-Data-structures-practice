class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let currentTail = this.tail
            currentTail.next = newNode;
            newNode.prev = currentTail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let remove = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = remove.prev;
            this.tail.next = null;
            remove.prev = null;
        }
        this.length--;
        return remove;
    }
    shift() {
        if(this.length === 0) return undefined;
        let remove = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = remove.next;
            remove.next = null;
            this.head.prev = null;
        }
        this.length--;
        return remove;
    }

}

let list = new DoublyLinkedList();
console.log(list);