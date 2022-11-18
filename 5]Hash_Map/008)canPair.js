function canPairs(arr, n, k) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] + arr[j]) % k == 0) {
                console.log(true)
            }
        }
    }
}

let arr = [9, 5, 7, 3]
let k = 6;
let n = arr.length;
canPairs(arr, n, k)