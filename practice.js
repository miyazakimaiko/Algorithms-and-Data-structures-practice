class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    shift() {
        let remove = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let nextHead = this.head.next;
            this.head = nextHead;
        }
        this.length--;
        return remove;
    }
    unshift(val) {
        if (!this.length) {
            this.head = val;
            this.tail = val;
        }
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return true;
    }
    get(index){
        if (index >= this.length || index < 0) return undefined;
        let target = this.head;
        for (let i = 0; i < index; i++) {
            target = target.next;
        }
        return target;
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        let node = new Node(val);
        let prevNode = this.head;
        let nextNode = this.head.next;
        for (let i = 1; i < index; i++) {
            prevNode = nextNode;
            nextNode = nextNode.next;
        }
        prevNode.next = node;
        node.next = nextNode;
        this.length++;
        return this;
    }
    rotate(num) {
        if (num <= 0 || num > this.length) return false;
        for (let i = 0; i < num; i++) {
            let rotate = this.shift();
            this.push(rotate.val);
        }
        return this;
    }
    set(index, val) {
        if (index < 0 || index >= this.length) return false;
        let target = this.get(index);
        target.val = val;
        return target;
    }
}

let list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
console.log(list);