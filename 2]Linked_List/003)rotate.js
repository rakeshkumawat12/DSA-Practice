var head;
class Node {
    constructor(data) {
        this.value = data,
            this.next = null
    }
}

function rotate(head, k) {
    let cur = head;
    let tail = head;
    let count = 1;
    while (tail.next != null) {
        tail = tail.next;
        count++;
    }
    if (k > count)
        k = k % count;
    if (k == 0)
        console.log(head)
    for (let i = 1; i < k; i++) {
        cur = cur.next
    }
    tail.next = head;
    head = cur.next
    cur.next = null;

    console.log(head)
}

function push(data) {
    newNode = new Node(data);
    newNode.next = head;
    head = newNode
}

push(6)
push(8)
push(5)
push(3)
push(9)
rotate(head, 3)


// Input:
// 1->2->3->4->5->6->7->8
// k = 4
// Output: 5->6->7->8->1->2->3->4