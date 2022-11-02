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




class Node{
  constructor(data){
    this.value = data;
    this.next = null;
  }
}

class queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data){
    const newNode = new Node(data)
    if(this.length == 0){
      this.first = newNode;
      this.last = newNode;
      this.length++
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
      this.length++
    }
  }

  display(){
    console.log(this.first)
    console.log(this.last)
  }

  dequeue(){
    this.first = this.first.next
    this.length--;
  }
}

const myQueue = new queue()
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.dequeue()
myQueue.display()

