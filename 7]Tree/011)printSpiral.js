
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function printSpiral(node) {
    let h = height(node);
    let ltr = false;
    for (let i = 1; i <= h; i++) {
        printGivenLevel(node, i, ltr);
        ltr = !ltr;
    }
}
function height(node) {
    if (node == null)
        return 0;
    else {
        let lheight = height(node.left);
        let rheight = height(node.right);
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

function printGivenLevel(node, level, ltr) {
    if (node == null)
        return;
    if (level == 1)
        console.log(node.data);
    else if (level > 1) {
        if (ltr != false) {
            printGivenLevel(node.left, level - 1, ltr);
            printGivenLevel(node.right, level - 1, ltr);
        }
        else {
            printGivenLevel(node.right, level - 1, ltr);
            printGivenLevel(node.left, level - 1, ltr);
        }
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);

printSpiral(root);


