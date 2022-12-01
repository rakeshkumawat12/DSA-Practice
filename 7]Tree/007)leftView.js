class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

let maxLevel = 0;
function leftViewUtil(node, level) {
    if (node === null) {
        return;
    }
    if (maxLevel < level) {
        console.log(node.value)
        maxLevel = level
    }

    leftViewUtil(node.left, level + 1);
    leftViewUtil(node.right, level + 1);
}

function leftView() {
    leftViewUtil(root, 1)
}

var root = new Node(10)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(7)
root.left.right = new Node(8)
root.right.right = new Node(15)
root.right.left = new Node(12)
root.right.right.left = new Node(14)
leftView()