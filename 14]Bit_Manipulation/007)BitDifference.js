function sumBitDifferences(arr, n) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let j = 0; j < n; j++)
            if ((arr[j] & (1 << i)))
                count++;

        ans += (count * (n - count) * 2);
    }
    return ans;
}

let arr = [1, 3, 5];
let n = arr.length;

console.log(sumBitDifferences(arr, n));
