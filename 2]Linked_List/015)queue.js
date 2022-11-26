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
  
  