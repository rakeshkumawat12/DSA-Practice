class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

function reverseList(head) {
    var prev = null;
    var current = head;
    var next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}

function addTwoList(head1, head2) {
    head1 = reverseList(head1);
    head2 = reverseList(head2);
    let head = null;
    let carry = 0, sum;
    while (head1 || head2) {
        if (head1 && head2)
            sum = head1.value + head2.value + carry;
        else if (head1)
            sum = head1.value + carry;
        else
            sum = head2.value + carry;
        if (sum > 9) {
            carry = sum / 10;
            sum = sum % 10;
        }
        else
            carry = 0;
        let newNode = new Node(sum)
        newNode.next = head;
        head = newNode;
        if (head1)
            head1 = head1.next;
        if (head2)
            head2 = head2.next;
    }
    if (carry != 0) {
        let newNode = new Node(carry)
        newNode.next = head;
        head = newNode;
    }
    console.log(head)
}

head1 = new Node(5);
head1.next = new Node(4);


head2 = new Node(5);
head2.next = new Node(4);
head2.next.next = new Node(3);

addTwoList(head1, head2)