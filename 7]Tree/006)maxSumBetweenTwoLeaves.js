class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Res {
    constructor() {
        this.val = 0;
    }
}

var root;

function setTree(root) {

    var temp = new Node(0);
    if (root.right == null) {
        root.right = temp;
    } else {
        root.left = temp;
    }
    return root;
}

function maxPathSumUtil(node, res) {
    if (node == null)
        return 0;
    if (node.left == null && node.right == null)
        return node.data;

    var ls = maxPathSumUtil(node.left, res);
    var rs = maxPathSumUtil(node.right, res);


    if (node.left != null && node.right != null) {

        res.val = Math.max(res.val, ls + rs + node.data);

        return Math.max(ls, rs) + node.data;
    }

    return (node.left == null) ? rs + node.data : ls + node.data;
}

function maxPathSum(root) {
    var res = new Res();
    res.val = Number.MIN_VALUE;

    if (root.left == null || root.right == null) {
        root = setTree(root);
    }

    maxPathSumUtil(root, res);
    return res.val;
}

var root = new Node(2);
root.left = new Node(4);
root.right = new Node(1);
root.left.left = new Node(7);
root.left.right = new Node(10);

console.log(maxPathSum(root));

