var head;

class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}
function endLoop(head, p){
  let q = head;
  while(p.next != q.next){
    q = q.next;
    p = p.next;
  }
  return p
}

function removeLoop(head){
  if (head === null)
    console.log(false)
  let p = head, q= head , end;
  while(p!=null && q!=null && q.next!=null){
    end = p;
    p = p.next;
    q = q.next.next;
    if(p==q)
      break;
  }
  if(p!=q){
    console.log(false)
  }
  if(head!=p){
    end = endLoop(head, p)
  }
  end.next = null;
  console.log(head);
}

function push(data){
  newNode = new Node(data)
  newNode.next = head;
  head = newNode
}

push(5)
push(4)
push(3)
push(2)
push(1)

head.next.next.next.next = head.next.next.next

removeLoop(head)
		
		
