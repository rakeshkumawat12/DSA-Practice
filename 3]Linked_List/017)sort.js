segregate(head)
{
    let temp = head;
    let count0 = 0, count1 = 0, count2 = 0, flag = 0;
    while (temp != null) {
        if (temp.data == 0)
            count0++;
        else if (temp.data == 1)
            count1++;
        else if (temp.data == 2)
            count2++;
        temp = temp.next
    }
    temp = head;
    while (count0 > 0) {
        temp.data = 0;
        temp = temp.next;
        count0--;
    }
    while (count1 > 0) {
        temp.data = 1;
        temp = temp.next;
        count1--;
    }
    while (count2 > 0) {
        temp.data = 2;
        temp = temp.next;
        count2--;
    }
    return head;
}