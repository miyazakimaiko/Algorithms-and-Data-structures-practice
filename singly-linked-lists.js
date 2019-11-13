class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
         newEl = new Node(val);
        if (!this.head) {
            this.head = newEl;
            this.tail = newEl;
        } else {
            this.tail.next = newEl;
            this.tail = newEl;
        }
        this.length += 1;
        return this;
    }
    // This still doesn't work
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        prev.next = null;
        this.length -= 1;
        return current;
    }
}

var list = new SinglyLinkedList()
