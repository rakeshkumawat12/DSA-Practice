function isSubsetSum(arr, n, sum) {
    if (sum == 0)
        return true;
    if (n == 0)
        return false;

    if (arr[n - 1] > sum)
        return isSubsetSum(arr, n - 1, sum);

    return isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1]);
}

let arr = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = arr.length;
console.log(isSubsetSum(arr, n, sum))


