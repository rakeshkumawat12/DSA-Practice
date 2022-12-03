class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function height(node) {
    if (node === null) {
        return 0;
    }

    return 1 + Math.max(height(node.left), height(node.right))
}

function diameter(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    let leftDiameter = diameter(root.left);
    let rightDiameter = diameter(root.right);

    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter))
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
console.log(diameter(root))