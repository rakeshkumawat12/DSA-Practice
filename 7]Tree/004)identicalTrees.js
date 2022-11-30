class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
let root1, root2;
function identicalTrees(a, b) {
    if (a == null && b == null)
        return true;
    if (a != null && b != null) {
        if (a.data == b.data
            && identicalTrees(a.left, b.left)
            && identicalTrees(a.right, b.right))
            return true
    }
    return false;
}
root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);

console.log(identicalTrees(root1, root2))

