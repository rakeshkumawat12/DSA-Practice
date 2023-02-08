function findminXOR(arr, n) {
    let minXOR = Number.MAX_VALUE;

    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            minXOR = Math.min(minXOR, arr[i] ^ arr[j]);
        }
    return minXOR;
}

let arr = [9, 5, 3];
let n = arr.length;
console.log(findminXOR(arr, n));
