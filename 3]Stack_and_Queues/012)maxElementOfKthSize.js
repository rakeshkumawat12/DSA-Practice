function printKMax(arr, n, k) {
    let j, max;
    for (let i = 0; i <= n - k; i++) {
        max = arr[i];

        for (j = 1; j < k; j++) {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        console.log(max);
    }
}
let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let n = arr.length;
let k = 3;
printKMax(arr, n, k);

