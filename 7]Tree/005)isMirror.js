class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


function isMirror(node1, node2) {
    if (node1 == null && node2 == null)
        return true;

    if (node1 != null && node2 != null && node1.value == node2.value) {
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }

    return false;
}

function isSymmetric() {
    return isMirror(root, root);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);
console.log(isSymmetric())

