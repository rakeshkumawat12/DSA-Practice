class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function findCeil(root, input) {
    var ans = Number.MAX_VALUE;
    while (root != null) {
        if (root.data == input) {
            return root.data
        }
        if (root.data > input) {
            ans = root.data;
            root = root.left
        } else {
            root = root.right
        }
    }
    return ans
}

let root = new Node(8)
root.left = new Node(4)
root.right = new Node(12)
root.left.left = new Node(2)
root.left.right = new Node(6)
root.right.left = new Node(10)
root.right.right = new Node(14)
console.log(findCeil(root, 3))