deleteNode(del)
{
    while (del.next.next != null) {
        del.data = del.next.data;
        del = del.next;
    }
    del.data = del.next.data;
    del.next = null;
}