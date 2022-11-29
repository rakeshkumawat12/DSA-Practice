class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
let root;
function maxDepth(node) {
    if (node == null)
        return 0;
    else {
        let left = maxDepth(node.left);
        let right = maxDepth(node.right);
        return Math.max(left, right) + 1;
    }
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
console.log(maxDepth(root));
