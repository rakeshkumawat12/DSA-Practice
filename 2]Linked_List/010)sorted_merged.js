
class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

function sortedMerged(head1, head2){
  let temp, head;
  let flag = 0;
  while(head1 != null && head2 != null){
    if (head1.value < head2.value){
      if(flag == 0){
        head = head1;
        temp = head1;
        flag = 1;
      }
      else{
        temp.next = head1;
        temp = temp.next
      }
      head1 = head1.next;
    }
    else{
      if(flag == 0){
        head = head2;
        temp = head2;
        flag = 1;
      }
      else{
        temp.next = head2;
        temp = temp.next
      }
      head2 = head2.next;
    }
  }
  while(head1 != null){
    temp.next = head1;
    temp = temp.next;
    head1 = head1.next;
  }
  while(head2 != null){
    temp.next = head2;
    temp = temp.next;
    head2 = head2.next;
  }
  console.log(head)
}

head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
head1.next.next.next = new Node(15);
head1.next.next.next.next = new Node(30);

head2 = new Node(5);
head2.next = new Node(15);
head2.next.next = new Node(30);

sortedMerged(head1, head2)