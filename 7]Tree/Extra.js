//Top view of Binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.hd = 0;
  }
}

function topview(root) {
  if (root == null)
    return;
  let q = [];
  let mp = new Map();
  let hd = 0;
  root.hd = hd;
  q.push(root);

  while (q.length != 0) {
    root = q[0];
    hd = root.hd;
    if (!mp.has(hd))
      mp.set(hd, root.data);
    if (root.left) {
      root.left.hd = hd - 1;
      q.push(root.left);
    }
    if (root.right) {
      root.right.hd = hd + 1;
      q.push(root.right);
    }
    q.shift()
  }

  let arr = Array.from(mp);
  arr.sort(function (a, b) { return a[0] - b[0]; })

  for (let [key, value] of arr.values()) {
    console.log(value);
  }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
root.left.right.right.right = new Node(6)
topview(root)

// ----------------------------

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//left,root,right
var inOrderTraversal = function (root) {
  let res = [];
  inorder(root);
  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    res.push(root.value);
    inorder(root.right);
  }
  return res;
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(4)
root.right.right = new Node(5)
console.log(inOrderTraversal(root))

// -----------------------------

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//root,left,right
var preOrderTraversal = function (root) {
  let res = [];
  preorder(root);
  function preorder(root) {
    if (root === null) {
      return;
    }
    res.push(root.value);
    preorder(root.left);
    preorder(root.right);
  }
  return res;
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(4)
root.right.right = new Node(5)
console.log(preOrderTraversal(root))

// ---------------------------

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//left,right,root
var postOrderTraversal = function (root) {
  let res = [];
  postorder(root);
  function postorder(root) {
    if (root === null) {
      return;
    }

    postorder(root.left);
    postorder(root.right);
    res.push(root.value);
  }
  return res;
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(4)
root.right.right = new Node(5)
console.log(postOrderTraversal(root))

