class Node {
    constructor(d) {
      this.data = d;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    inorder() {
      this.inorderUtil(this.root);
    }
  
    inorderUtil(node) {
      if (node == null) {
        return;
      }
  
      this.inorderUtil(node.left);
      console.log(node.data);
      this.inorderUtil(node.right);
    }
  
    storeInorderUtil(node, list) {
      if (node == null) {
        return list;
      }
      this.storeInorderUtil(node.left, list);
      list.push(node.data);
      this.storeInorderUtil(node.right, list);
      return list;
    }
  
    storeInorder(node) {
      var list1 = [];
      var list2 = this.storeInorderUtil(node, list1);
      return list2;
    }
  
    merge(list1, list2, m, n) {
      var list3 = [];
      var i = 0;
      var j = 0;
  
      while (i < m && j < n) {
        if (list1[i] < list2[j]) {
          list3.push(list1[i]);
          i++;
        } else {
          list3.push(list2[j]);
          j++;
        }
      }
      while (i < m) {
        list3.push(list1[i]);
        i++;
      }
      while (j < n) {
        list3.push(list2[j]);
        j++;
      }
      return list3;
    }
  
  
    ALtoBST(list, start, end) {
      if (start > end) {
        return null;
      }
      var mid = parseInt((start + end) / 2);
      var node = new Node(list[mid]);
      node.left = this.ALtoBST(list, start, mid - 1);
      node.right = this.ALtoBST(list, mid + 1, end);
      return node;
    }
  
    mergeTrees(node1, node2) {
      var list1 = this.storeInorder(node1);
  
      var list2 = this.storeInorder(node2);
  
      var list3 = this.merge(list1, list2, list1.length, list2.length);
  
      var node = this.ALtoBST(list3, 0, list3.length - 1);
      return node;
    }
  }
  
  var tree1 = new BinarySearchTree();
  tree1.root = new Node(100);
  tree1.root.left = new Node(50);
  tree1.root.right = new Node(300);
  tree1.root.left.left = new Node(20);
  tree1.root.left.right = new Node(70);
  
  var tree2 = new BinarySearchTree();
  tree2.root = new Node(80);
  tree2.root.left = new Node(40);
  tree2.root.right = new Node(120);
  
  var tree = new BinarySearchTree();
  tree.root = tree.mergeTrees(tree1.root, tree2.root);
  
  tree.inorder();
  
  