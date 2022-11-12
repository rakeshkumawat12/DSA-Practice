class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(data) {
        this.s1.push(data)
    }

    dequeue() {
        while (this.s1.length != 0) {
            this.s2.push(this.s1.pop())
        }
        let ans = this.s2.pop();
        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop())
        }
        console.log(ans)
    }
}

let myQueue = new Queue()
myQueue.enqueue(3)
myQueue.enqueue(8)
myQueue.enqueue(5)
myQueue.dequeue()