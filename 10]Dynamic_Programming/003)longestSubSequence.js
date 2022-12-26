function longestSubSequence(arr, n) {
    let DP = Array(n).fill(0);

    for (let i = 0; i < n; i++)
        DP[i] = 1;

    for (let i = 1; i < n; i++)
        for (let j = 0; j < i; j++)
            if (arr[i] > arr[j] && DP[i] < DP[j] + 1)
                DP[i] = DP[j] + 1;

    let max = 0;
    for (let i = 0; i < n; i++)
        if (max < DP[i])
            max = DP[i];

    return max;
}

let arr = [10, 5, 8, 3, 9, 4, 12, 11];
let n = arr.length;
console.log(longestSubSequence(arr, n));

