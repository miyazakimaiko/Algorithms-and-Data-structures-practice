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
    delete(val) {
        const deleteNode = (node, val) => {
            if (!node) return undefined;
            if (node.val === val) {
                if (node.left === null && node.right === null) {
                    return null;
                }
                else if (node.left === null) {
                    return node.right;
                }
                else if (node.right === null) {
                    return node.left;
                } 
                else {
                    let replacement = node.right;
                    while(replacement.left !== null) {
                        replacement = replacement.left;
                    }
                    node.val = replacement.val;
                    node.right = deleteNode(node.right, replacement.val);
                    return node;
                }
            } else if (val < node.val) {
                node.left = deleteNode(node.left, val);
                return node;
            } else {
                node.right = deleteNode(node.right, val);
                return node;
            }
        }
        this.root = deleteNode(this.root, val);
    }
    // BREADTH FIRST SEARCH PSEUDOCODE
    // Create a queue (this can be an array) and a variable to  store the values of nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
    // - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // - If there is a left property on the node dequeued - add it to the queue
    // - If there is a right property on the node dequeued - add it to the queue
    // Return the variable that stores the value
    BFS() {
        let target = this.root;
        let checker = [];
        let checked = [];
        checker.push(target)
        while (checker.length) {
            target = checker.shift();
            checked.push(target);
            if (target.left) {
                checker.push(target.left)
            }
            if (target.right) {
                checker.push(target.right)
            }
        }
        return checked;
    }
    // DEPTH FIRST SEARCH PSEUDOCODE PRE-ORDER (RECURSION)
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in the variable called current
    // Write a helper function which accepts a node
    //  - Push the value of the node to the variable that stores the values
    //  - If the node has a left property, call the helper function with the left property on the node
    // Invoke the helper function with the current variable
    // Return the array of values
    DFSPreOrder() {
        let checker = [];
        let target = this.root;
        const traversal = (node) => {
            checker.push(node);
            if (node.left) {
                traversal(node.left);
            }
            if (node.right) {
                traversal(node.right);
            }
        }
        traversal(target);
        return checker;
    }
    // DEPTH FIRST SEARCH PSEUDOCODE POST-ORDER (RECURSION)
    DFSPostOrder() {
        let checker = [];
        let target = this.root;
        const traversal = (node) => {
            if (node.left) {
                traversal(node.left);
            }
            if (node.right) {
                traversal(node.right);
            }
            checker.push(node.value);
        }
        traversal(target);
        return checker;
    }
    // DEPTH FIRST SEARCH PSEUDOCODE IN-ORDER (RECURSION)
    DFSInOrder() {
        let checker = [];
        let target = this.root;
        const traversal = (node) => {
            if (node.left) {
                traversal(node.left);
            }
            checker.push(node.val);
            if (node.right) {
                traversal(node.right);
            }
        }
        traversal(target);
        return checker;
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(18);
tree.insert(11);
tree.insert(6);
tree.insert(2);


console.log(tree);