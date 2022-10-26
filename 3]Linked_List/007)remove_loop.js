var head;
  
class Node 
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function removeLoop(head)
    {
        let fast = head.next;
        let slow = head;
        
        while( fast !== slow )
        {
            if( fast === null || fast.next === null ) 
            console.log("false");
            
            fast = fast.next.next;
            slow = slow.next;
        }        
        let size = 1;
        fast = fast.next;
        while( fast !== slow )
        {
            fast = fast.next;
            size++;
        }
        slow = head;
        fast = head;
        for(let i=0; i<size-1; i++)
            fast = fast.next;
        while( fast.next != slow )
        {
            fast = fast.next;
            slow = slow.next;
        }
        fast.next = null;
    }



head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);
  
head.next.next.next.next.next = head.next.next;
removeLoop(head);

