class linkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        console.log(this)
    }

    prepend(data) {
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        console.log(this)
    }

    traversing(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    delete(index) {
        const leaderNode = this.traversing(index - 1);
        const unWantedNode = leaderNode.next;
        const nextNode = unWantedNode.next;

        leaderNode.next = nextNode;
        this.length--;
        console.log(this)
    }

    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }

        const leaderNode = this.traversing(index - 1);
        const nextNode = leaderNode.next
        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++
        console.log(this)
    }

    reverse() {
        if (this.head === null)
            console.log(null)

        let prev = null;
        let current = this.head;
        let next = current.next;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        console.log(prev)
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array)
    }
}

mynew = new linkedList(20);
mynew.append(12)
mynew.prepend(11)
mynew.delete(1)
mynew.insert(1, 55)
mynew.reverse()
mynew.printList()


