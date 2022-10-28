function middleNode(node) {
    let fast = head;
    let slow = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next
    }
    console.log(slow.data)
}