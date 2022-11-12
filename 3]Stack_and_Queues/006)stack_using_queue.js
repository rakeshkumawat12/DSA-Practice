class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(data) {
        this.q2.push(data)
        while (this.q1.length != 0) {
            this.q2.push(this.q1.pop())
        }
        while (this.q2.length != 0) {
            this.q1.push(this.q2.pop())
        }
    }
    pop() {
        this.q1.pop()
        console.log(this.q1)
    }
}

let myStack = new Stack;
myStack.push(6)
myStack.push(7)
myStack.push(3)
myStack.pop()