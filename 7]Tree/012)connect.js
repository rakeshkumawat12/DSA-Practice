
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = this.nextRight = null;
    }
}
function connect(p) {
    let q = [];
    q.push(root);
    let temp = null;
    while (q.length != 0) {
        let n = q.length;
        for (let i = 0; i < n; i++) {
            let prev = temp;
            temp = q.shift();
            if (i > 0)
                prev.nextRight = temp;

            if (temp.left != null)
                q.push(temp.left);

            if (temp.right != null)
                q.push(temp.right);
        }
        temp.nextRight = null;
    }
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);


connect(root);
let a = root.nextRight != null ? root.nextRight.data : -1;
console.log("nextRight of " + root.data + " is "
    + a);
let b = root.left.nextRight != null ? root.left.nextRight.data : -1;
console.log("nextRight of " + root.left.data + " is "
    + b);
let c = root.right.nextRight != null ? root.right.nextRight.data : -1;
console.log("nextRight of " + root.right.data + " is "
    + c);
let d = root.left.left.nextRight != null ? root.left.left.nextRight.data : -1;
console.log("nextRight of " + root.left.left.data + " is "
    + d);

