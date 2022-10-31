
var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function reverse(head, k) {
    let cur, prev, next, start1, start2;
    let flag = 0, m = 0;
    cur = head;
    prev = null;
    start1 = cur;
    while (cur != null) {
        for (let i = 0; i < k; i++) {
            if (cur == null)
                break;

            next = cur.next;
            cur.next = prev
            prev = cur;
            cur = next;
        }
        if (m != 0) {
            start1.next = prev;
            start1 = start2
        }
        start2 = cur
        m++;
        if (flag == 0) {
            head = prev;
            flag = 1;
        }
        prev = null
    }
    console.log(head)
}
function push(data) {
    newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}


push(5);
push(4);
push(3);
push(2);
push(1);


reverse(head, 3);



