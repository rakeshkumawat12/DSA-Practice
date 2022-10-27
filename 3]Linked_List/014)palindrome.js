isPalindrome(head)
{
    if (head == null)
        return true;

    let mid = middle(head);
    let last = reverse(mid)

    while (last != null) {
        if (head.data != last.data)
            return false;
        last = last.next;
        head = head.next
    }
    return true

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


}