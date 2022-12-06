
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function isBST(root) {
    return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE)
}

function isBSTUtil(node, min, max) {
    if (node === null)
        return true;

    if (node.data < min || node.data > max)
        return false;

    return (isBSTUtil(node.left, min, node.data - 1) &&
        isBSTUtil(node.right, node.data + 1, max))
}

var root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);
console.log(isBST(root))