class stack {
  constructor() {
    this.array = [];
  }

  append(data) {
    this.array.push(data);
  }

  peek() {
    console.log(this.array[this.array.length - 1])
  }

  remove() {
    this.array.pop()
  }

  display() {
    console.log(this.array)
  }
}

const myStack = new stack();
myStack.append(4)
myStack.append(7)
myStack.append(9)
myStack.remove()
myStack.peek()
myStack.display()




class Node {
  constructor(data) {
    this.value = data,
      this.next = null
  }
}

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
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
  }
}

const myStack = new Stack();
myStack.append(3)
myStack.append(4)
myStack.append(7)
myStack.append(8)
myStack.display()
myStack.remove()
myStack.display()


