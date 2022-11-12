function largestRectangleArea(arr, n) {
    var left = new Array(n)
    var right = new Array(n)
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (stack.length == 0) {
            left[i] = 0;
            stack.push(i);
        }
        else {
            while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i])
                stack.pop();
            left[i] = stack.length == 0 ? 0 : stack[stack.length - 1] + 1;
            stack.push(i)
        }
    }
    while (stack.length != 0)
        stack.pop();

    for (i = n - 1; i >= 0; i--) {
        if (stack.length == 0) {
            right[i] = n - 1;
            stack.push(i);
        }
        else {
            while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i])
                stack.pop();
            right[i] = stack.length == 0 ? n - 1 : stack[stack.length - 1] - 1;
            stack.push(i)
        }
    }
    let maxArea = 0;
    for (let i = 0; i < n; i++)
        maxArea = Math.max(maxArea, arr[i] * (right[i] - left[i] + 1));
    console.log(maxArea)

}

let arr = [7, 2, 8, 9, 1, 3, 6, 5]
let n = arr.length;
largestRectangleArea(arr, n)