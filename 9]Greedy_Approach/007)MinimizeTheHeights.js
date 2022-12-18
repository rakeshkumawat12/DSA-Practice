
function getMinDiff(arr, n, k) {
    arr.sort((a, b) => (a - b))
    let result = arr[n - 1] - arr[0];

    let tempmin = arr[0];
    let tempmax = arr[n - 1];

    for (let i = 1; i < n; i++) {
        tempmin = Math.min(arr[0] + k, arr[i] - k); // Minimum element when we add k to whole array
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we subtract k from whole array
        result = Math.min(result, tempmax - tempmin);
    }
    return result;
}


let k = 6, n = 6;
let arr = [7, 4, 8, 8, 8, 9];
console.log(getMinDiff(arr, n, k))



