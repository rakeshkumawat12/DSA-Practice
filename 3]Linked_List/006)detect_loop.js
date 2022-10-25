
var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function detectLoop(head) {
    if (!head)
        return false;
    let fast = head.next;
    let slow = head;

    while (fast !== slow) {
        if (!fast || !fast.next)
            return false;

        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
}
push(20);
push(4);
push(15);
push(10);



head.next.next.next.next = head;

if (detectLoop(head))
    console.log("Loop found");
else
    console.log("No Loop");
