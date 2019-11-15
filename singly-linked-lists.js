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
    get(num) {
        if(num < 0 || num >= this.length) return null;
        let item = this.head;
        for (let i = 0; i < this.length; i++) {
            if(i === num) return item;
            item = item.next;
        }
    }
    set(index, value) {
        if(index < 0 || index >= this.length) return false;
        let position = this.get(index);
        position.val = value;
        return true;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value) // return true(!!) if this.push(value) happens. 
        if (index === 0) return !!this.unshift(value) 
        let newNode = new Node(value);
        let prev = this.get(index-1);
        let next = this.get(index);
        prev.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prev = this.get(index - 1);
        let remove = prev.next;
        prev.next = remove.next;
        this.length--;
        return remove;
    }
    // I should be able to shorten this method.
    reverse() {
        let newTail = this.head;
        let prev = newTail;
        let current = newTail.next;
        while(current.next) {
            let currentNext = current.next;
            current.next = prev;
            prev = current;
            current = currentNext;
        } 
        this.head = current;
        current.next = prev;
        this.tail = newTail;
        this.tail.next = null;
        return this;
    }
}

var list = new SinglyLinkedList()
console.log(list)
