
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function intersectPoint(head1, head2){
    let len1 = 0, len2 = 0
    let temp1 = head1;
    while (temp1 != null) {
        len1++;
        temp1 = temp1.next;
    }
    let temp2 = head2;
    while (temp2 != null) {
        len2++;
        temp2 = temp2.next;
    }
    temp1 = head1;
    temp2 = head2;
    let dif = len1 - len2;
    if (len1 > len2) {
        for (let i = 0; i < dif; i++) {
            temp1 = temp1.next
        }
    }
    else {
        for (let i = 0; i < dif; i++) {
            temp2 = temp2.next
        }
    }
    while (temp1 != temp2) {
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    console.log(temp1.data)
}

head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
head1.next.next.next = new Node(15);
head1.next.next.next.next = new Node(30);

head2 = new Node(10);
head2.next = new Node(15);
head2.next.next = new Node(30);

intersectPoint(head1, head2)

		
		
