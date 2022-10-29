var head;
class Node {
    constructor(data) {
        this.value = data,
        this.next = null
    }
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow.value)
}

function push(data) {
    newNode = new Node(data)
    newNode.next = head;
    head = newNode;
}

push(3)
push(6)
push(9)
push(12)
push(15)
middleNode(head)


// ----------2-------------
var head;
class Node {
  constructor(data){
    this.value= data,
    this.next= null
  }
}
function middleNode(head){
  let slow = head;
  let fast = head;

  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.value)
}

head = new Node(3);
head.next = new Node(6);
head.next.next = new Node(9);
head.next.next.next = new Node(15);
head.next.next.next.next = new Node(30);
middleNode(head)

