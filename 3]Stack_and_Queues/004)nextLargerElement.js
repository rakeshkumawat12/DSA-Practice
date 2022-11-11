function nextLargestElement(A, n) {
    let stack = [];
    var B = new Array(n);
    var next;

    for (let i = n - 1; i >= 0; i--) {
        next = A[i];
        while (stack.length != 0 && next > stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0)
            B[i] = -1;
        else
            B[i] = stack[stack.length - 1]
        stack.push(next);
    }
    console.log(B)
}

let A = [1, 3, 2, 4]
let n = A.length;
nextLargestElement(A, n)