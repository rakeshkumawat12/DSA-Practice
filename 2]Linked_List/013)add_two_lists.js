reverse(head) 
    {
        let prev = null;
        let current = head;
        let next;
        
        while (current !== null) 
        { 
            next = current.next;   
            current.next = prev;    
            prev = current;           
            current = next;           
        }
        
        return prev; 
    }
    //Function to add two numbers represented by linked list.
    addTwoLists(first, second)
    {
        //reversing both lists to simplify addition.
        first = this.reverse(first);             
        second = this.reverse(second);
        
        let sum = null;
        let carry = 0;
        
        //using a loop till both lists and carry gets exhausted.
        while( first !== null || second !== null || carry !== 0 )
        {
            //using a variable to store sum of two digits along with carry.
            let newVal = carry;
            
            //if nodes are left in any list, we add their data in newVal.
            if(first) newVal += first.data;
            if(second) newVal += second.data;
            
            //updating carry.
            carry = Math.floor(newVal/10); 
            //using modulus to store only a single digit at that place.
            newVal = newVal%10;    
            
            //creating new node which gets connected with other nodes that 
            //we get after calculating sum of respective digits.
            let newNode = new Node(newVal);
            //storing the previously made nodes in the link part of new node.
            newNode.next = sum;   
            //making the new node as the first node of all previously made node.
            sum = newNode;
            
            //moving ahead in both lists.
            if(first) first = first.next;     
            if(second) second = second.next;
        }
        return sum;
    }