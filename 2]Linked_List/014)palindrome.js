class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

function middle(head) {
        let slow = head;
        let fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

function reverse(node) {
        let prev = null;
        let current = node;
        let next = current.next;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }

function isPalindrome(head){
    if (head == null)
        console.log(false);

    let mid = middle(head);
    let last = reverse(mid)

    while (last != null) {
        if (head.value != last.value)
            console.log(false);
        last = last.next;
        head = head.next
    }
    console.log(true);
}

head = new Node(5);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
isPalindrome(head)