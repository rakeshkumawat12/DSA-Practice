// Simple Javascript program to find n'th node from end of linked list

/* Linked List node */
class Node {
	
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

/* Function to get the nth node from the last of a
	linked list */
class LinkedList
{

	constructor(d){
	this.head = d;
	}

printNthFromLast(n)
{
	let len = 0;
	let temp = this.head;

	// 1) count the number of nodes in Linked List
	while (temp != null) {
		temp = temp.next;
		len++;
	}

	// check if value of n is not more than length of
	// the linked list
	if (len < n)
		console.log('ji');

	temp = this.head;

	// 2) get the (len-n+1)th node from the beginning
	for (let i = 1; i < len - n + 1; i++)
		temp = temp.next;

	console.log(temp.data);
}

/* Inserts a new Node at front of the list. */
push(new_data)
{
	/* 1 & 2: Allocate the Node &
				Put in the data*/
	let new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = this.head;

	/* 4. Move the head to point to new Node */
	this.head = new_node;
}
}

/*Driver program to test above methods */
	let llist = new LinkedList();
	llist.push(20);
	llist.push(4);
	llist.push(15);
	llist.push(35);

	llist.printNthFromLast(2);

// This code is contributed by Saurabh Jaiswal
