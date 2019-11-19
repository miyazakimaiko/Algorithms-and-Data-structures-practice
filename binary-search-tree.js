class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(val) {
        const node = new Node(val);
        if(this.root === null) {
            this.root = node;
            return this;
        } else {
            let target = this.root;
            while (true) {
                if (val === target.val) return undefined;
                if (node.val > target.val) {
                    if (target.right === null) {
                        target.right = node;
                        return this;
                    } else {
                        target = target.right;
                    }
                }
                if (node.val < target.val) {
                    if (target.left === null) {
                        target.left = node;
                        return this;
                    } else {
                        target = target.left;
                    }
                }
            }
        } 
    }
    find(val) {
        let target = this.root,
            found = false;
        if (target === null) return false;
        while (target && !found) {
            if (val < target.val) {
                target = target.left;
            } else if (val > target.val) {
                target = target.right;
            } else if (val === target.val) {
                found = true;
            }
        }
        return found;
    }
}

const tree = new BST();

console.log(tree);