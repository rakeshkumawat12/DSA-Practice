function maxSumIS(arr, n) {
    let DP = new Array(n);

    for (let i = 0; i < n; i++)
        DP[i] = arr[i];

    for (let i = 1; i < n; i++)
        for (j = 0; j < i; j++)
            if (arr[i] > arr[j] &&
                DP[i] < DP[j] + arr[i])
                DP[i] = DP[j] + arr[i];

    let max = 0;
    for (let i = 0; i < n; i++)
        if (max < DP[i])
            max = DP[i];

    return max;
}


let arr = [1, 101, 2, 3, 100, 4, 5];
let n = arr.length;
console.log(maxSumIS(arr, n));


