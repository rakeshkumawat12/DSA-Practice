class Stack {
    constructor() {
      this.top = null;
      this.length = 0;
    }
    append(data) {
      const newNode = new Node(data);
      if (this.length == 0) {
        this.top = newNode;
      }
      else {
        let holdingPointer = this.top;
        this.top = newNode;
        newNode.next = holdingPointer;
      }
      this.length++;
    }
    display() {
      console.log(this.top)
    }
    remove() {
      this.top = this.top.next;
      this.length--;
    }
  }
  
  const myStack1 = new Stack();
  myStack1.append(3)
  myStack1.append(4)
  myStack1.append(7)
  myStack1.append(8)
  myStack1.display()
  myStack1.remove()
  myStack1.display()
  