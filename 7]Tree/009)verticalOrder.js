class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

let min = 0;
let max = 0;

function findMinMax(node, hd) {
    if (node === null)
        return;

    if (hd < min) {
        min = hd
    }
    else if (hd > max) {
        max = hd
    }

    findMinMax(node.left, hd - 1);
    findMinMax(node.right, hd + 1);
}

function printVerticalLine(node, lineNo, hd) {
    if (node === null) {
        return;
    }

    if (hd == lineNo) {
        console.log(node.value)
    }
    printVerticalLine(node.left, lineNo, hd - 1);
    printVerticalLine(node.right, lineNo, hd + 1);
}

function verticalOrder(node) {
    findMinMax(node, 0)
    for (let lineNo = min; lineNo <= max; lineNo++) {
        printVerticalLine(node, lineNo, 0)
        console.log("");
    }
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);
verticalOrder(root)
