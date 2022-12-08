class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

var MAX = Number.MAX_VALUE;
var MIN = Number.MIN_VALUE;

class nodeInfo {
    constructor(size, max, min, isBST) {
        this.size = size;
        this.max = max;
        this.min = min;
        this.isBST = isBST;
    }
}

function largestBST(root) {

    if (root == null) {
        return new nodeInfo(0, MIN, MAX, true);
    }
    if (root.left == null && root.right == null) {
        return new nodeInfo(1, root.data, root.data, true);
    }

    var left = largestBST(root.left);
    var right = largestBST(root.right);

    var returnInfo = new nodeInfo();

    if (left.isBST && right.isBST && left.max < root.data && right.min > root.data) {
        returnInfo.min = Math.min(left.min, root.data);
        returnInfo.max = Math.max(right.max, root.data);

        returnInfo.size = Math.max(left.size, right.size) + 1;
        returnInfo.isBST = true;
        return returnInfo;
    }

    returnInfo.size = Math.max(left.size, right.size);
    returnInfo.isBST = false;
    return returnInfo;
}

function largestBst(root) {
    return largestBST(root).size;
}



var node1 = new Node(60);
node1.left = new Node(55);
node1.right = new Node(70);
node1.left.left = new Node(5);

console.log(largestBst(node1));








