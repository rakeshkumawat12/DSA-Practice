class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function findFloor(root, input) {
    var ans = Number.MIN_VALUE;
    while (root != null) {
        if (root.data == input) {
            return root.data
        }
        if (root.data > input) {
            root = root.left
        } else {
            ans = root.data;
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
console.log(findFloor(root, 13))