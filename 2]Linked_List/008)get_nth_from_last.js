var head;

class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}


function getNthFromLast(head, n){
  let temp = head;
  
  let count = 0
  while (temp != null){
    count++
    temp = temp.next;
  }
  if(count < n)
    console.log(-1)
  count = count - n
  let temp1 = head;
  for (let i = 0; i<count; i++){
    temp1 = temp1.next
  }
  console.log(temp1.value)
}

function push(data){
  newNode = new Node(data);
  newNode.next = head;
  head = newNode;
} 

push(5)
push(4)
push(3)
push(2)
push(1)

getNthFromLast(head, 2)
		
		
