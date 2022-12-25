function findMinRec(arr, i, sumCalculated, sumTotal) {
    if (i == 0)
        return Math.abs((sumTotal - sumCalculated) -
            sumCalculated);

    return Math.min(findMinRec(arr, i - 1, sumCalculated
        + arr[i - 1], sumTotal),
        findMinRec(arr, i - 1,
            sumCalculated, sumTotal));
}

function findMin(arr, n) {

    let sumTotal = 0;
    for (let i = 0; i < n; i++)
        sumTotal += arr[i];

    return findMinRec(arr, n, 0, sumTotal);
}

let arr = [3, 1, 4, 2, 2, 1];
let n = arr.length;
console.log(findMin(arr, n));

