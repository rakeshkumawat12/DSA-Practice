class Queues {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data) {
        if (this.stack1.length == 0) {
            this.stack1.push(data)
        }
        else {
            while (this.stack1.length != 0) {
                this.stack2.push(this.stack1[this.stack1.length - 1])
                this.stack1.pop()
            }
            this.stack1.push(data);
            while (this.stack2.length != 0) {
                this.stack1.push(this.stack2[this.stack2.length - 1])
                this.stack2.pop()
            }
        }
    }

    display() {
        console.log(this.stack1)
    }
    
    dequeue() {
        this.stack1.pop()
    }
}

const myQueue = new Queues()
myQueue.enqueue(2)
myQueue.enqueue(4)
myQueue.enqueue(6)
myQueue.enqueue(8)
myQueue.dequeue()
myQueue.display()