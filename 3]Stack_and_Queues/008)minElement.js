class Stack {
    constructor() {
        this.S = [];
        this.minEle;
    }

    getMin() {
        if (this.S.length == 0)
            console.log("Stack is empty");
        else
            console.log(this.minEle);
    }

    pop() {
        if (this.S.length == 0)
            return -1;
        let y = this.S.length - 1;
        this.S.pop();
        if (y < this.minEle) {
            this.minEle = (2 * this.minEle) - y;
            console.log((this.minEle + y) / 2);
        }
        else {
            console.log(y);
        }
    }

    push(x) {
        if (this.S.length == 0) {
            this.minEle = x;
            this.S.push(x);
        }
        else if (x < this.minEle) {
            this.S.push(2 * x - this.minEle)
            this.minEle = x;
        }
        else
            this.S.push(x)
    }
}

let myStack = new Stack;
myStack.push(2)
myStack.push(3)
myStack.pop()
myStack.getMin()
myStack.push(1)
myStack.getMin()