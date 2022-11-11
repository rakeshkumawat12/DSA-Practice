function calculateSpans(price, n) {
    let S = new Array(n).fill(0)
    S[0] = 1;

    var stack = [];
    stack.push(0)

    for (var i = 1; i < n; i++) {
        while (stack.length !== 0 && price[stack[stack.length - 1]] <= price[i])
            stack.pop();

        S[i] = (stack.length === 0) ? (i + 1) : (i - stack[stack.length - 1]);

        stack.push(i);
    }
    console.log(S)
}

let price = [100, 80, 60, 70, 60, 75, 85]
let n = price.length
calculateSpans(price, n)