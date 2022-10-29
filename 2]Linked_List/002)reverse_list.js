var head;
class Node{
  constructor(data){
    this.value = data,
    this.next = null
  }
}

function reverse(head){
  if(head === null){
    console.log(null)
  }

  var prev = null;
  var current = head;
  var next = null;

  while(current!=null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  console.log(prev)
}

function push(data){
  newNode = new Node(data);
  newNode.next = head;
  head = newNode;
} 

push(6)
push(8)
push(10)
push(12)
push(13)
reverse(head)