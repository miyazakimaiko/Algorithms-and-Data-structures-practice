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
    unshift(val) {
        if (!this.head) {
            this.push(val);
            return this;
        } else {
            let newNode = new Node(val);
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let half = Math.floor(this.length / 2);
        if (index <= half) {
            let i = 0;
            let target = this.head;
            while (i !== index) {
                target = target.next;
                i++;
            }
            return target;
        } else {
            let i = this.length - 1;
            let target = this.tail;
            while (i !== index) {
                target = target.prev;
                i--;
            }
            return target;
        }
    }
    set(index, val) {
        if (!this.head) return undefined;
        let target = this.get(index);
        if (target) {
            target.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let after = this.get(index);
        if(after) {
            let before = after.prev;
            before.next = newNode;
            newNode.prev = before;
            after.prev = newNode;
            newNode.next = after;
            this.length++;
            return true;
        }
        return false;
    }
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length) return !!this.pop();

        let target = this.get(index);
        if (target) {
            let before = target.prev;
            let after = target.next;
            before.next = after;
            after.prev = before;
            target.next = null;
            target.prev = null;
            this.length--;
            return true;
        }
        return false;
    }

}

let list = new DoublyLinkedList();
console.log(list);