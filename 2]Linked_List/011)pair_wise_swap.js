var head;
class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

function pairWiseSwap(head){
  let temp = head, first = head, second = head;
  let flag = 0;
  while(second.next != null){
    first = second.next;
    second.next = first.next;
    first.next = second;
    if(flag == 0)
      head = first
    if(flag != 0){
      temp.next = first;
      temp = second;
    }
    second = second.next;
    first = second;

    if (second == null)
      break;
    flag = 1;
  }
  console.log(head);
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
pairWiseSwap(head)