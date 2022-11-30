class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function height(root) {
    if (root === null) {
        return -1;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
}

function isBalanced(root) {
    if (root == null) {
        return true;
    }

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true)
        return true;

    return false;
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.left.left = new Node(8)
console.log(isBalanced(root))