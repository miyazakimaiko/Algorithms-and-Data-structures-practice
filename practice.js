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
    get(index){
        if (index >= this.length || index < 0) return undefined;
        let target = this.head;
        for (let i = 0; i < index; i++) {
            target = target.next;
        }
        return target;
    }
}

let list = new SinglyLinkedList();

list.push("Maiko");
list.push("Aiko");
list.push("Youko");
list.push("Saiko");
list.push("Reiko");
list.push("Taiko");
console.log(list);