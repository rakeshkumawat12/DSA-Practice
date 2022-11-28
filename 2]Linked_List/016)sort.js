var head;
class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

function segregate(head) {
    let temp = head;
    let count0 = 0, count1 = 0, count2 = 0, flag = 0;
    while (temp != null) {
        if (temp.value == 0)
            count0++;
        else if (temp.value == 1)
            count1++;
        else if (temp.value == 2)
            count2++;
        temp = temp.next
    }
    temp = head;
    while (count0 > 0) {
        temp.value = 0;
        temp = temp.next;
        count0--;
    }
    while (count1 > 0) {
        temp.value = 1;
        temp = temp.next;
        count1--;
    }
    while (count2 > 0) {
        temp.value = 2;
        temp = temp.next;
        count2--;
    }
    console.log(head);
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(2);
segregate(head)