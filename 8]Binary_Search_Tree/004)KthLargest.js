class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
let index = 0;
let ans = -1;

function solve(root, K) {
    if (root == null || index >= K)
        return;
    solve(root.right, K)
    index++
    if (K == index) {
        ans = root.data;
        return;
    }
    solve(root.left, K);
}

function kthLargest(root, K) {
    solve(root, K, index);
    return ans;
}

let root = new Node(50)
root.left = new Node(30)
root.right = new Node(70)
root.left.left = new Node(20)
root.left.right = new Node(40)
root.right.left = new Node(60)
root.right.right = new Node(80)
console.log(kthLargest(root, 3))






