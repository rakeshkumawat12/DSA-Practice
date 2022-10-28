function reverseList(head) {
    if (head === null)
    console.log(null);

    let prev = null;
    let current = head;
    let next = current.next;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    console.log(prev);
}
