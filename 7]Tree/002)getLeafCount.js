class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
let root;
let count = 0;
function getLeafCount(node) {
    if (node == null)
        return 0;
    if (node.left == null && node.right == null)
        return 1;
    else
        return getLeafCount(node.left) + getLeafCount(node.right);
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(getLeafCount(root));
