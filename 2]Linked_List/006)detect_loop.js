var head;

class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

function detectLoop(head){
  if (head === null)
    console.log(false)
  let p = head;
  let q = head;
  while(p != null && q != null && q.next != null){
    p = p.next;
    q = q.next.next;
    if(p == q)
      console.log(true);
  }
  console.log(false)
}

function push(data){
  newNode = new Node(data)
  newNode.next = head;
  head = newNode
}

push(1)
push(3)
push(4)

head.next.next = head.next

detectLoop(head)
		
		
