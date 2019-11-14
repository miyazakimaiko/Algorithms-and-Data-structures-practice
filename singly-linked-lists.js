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
        let newEl = new Node(val);
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
    // It's working now...
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
    shift() {
        if(!this.head) return undefined;
        let removeItem = this.head;
        this.head = removeItem.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return removeItem;
    }
    unshift(val) {
        let newEl = new Node(val);
        if(!this.head) {
            this.head = newEl;
            this.tail = this.head;
        } else {
            let prevHead = this.head;
            this.head = newEl;
            this.head.next = prevHead;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
console.log(list)
