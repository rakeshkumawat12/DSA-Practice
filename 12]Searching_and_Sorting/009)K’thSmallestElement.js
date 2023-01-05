function kthSmallest(arr, N, K) {
    arr.sort((a, b) => a - b);
    return arr[K - 1];
}

let arr = [12, 3, 5, 7, 19];
let N = arr.length;
let K = 2;
console.log(kthSmallest(arr, N, K));  