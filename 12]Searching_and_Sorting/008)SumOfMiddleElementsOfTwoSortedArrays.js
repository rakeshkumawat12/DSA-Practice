function getMedian(arr1, arr2, n) {
    let j = 0;
    let i = n - 1;
    while (arr1[i] > arr2[j] && j < n && i > -1) {
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
        i--; j++;
    }
    arr1.sort(function (a, b) { return a - b });
    arr2.sort(function (a, b) { return a - b });
    return parseInt((arr1[n - 1] + arr2[0]));
}

let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
let n1 = 5;
let n2 = 5;
console.log(getMedian(arr1, arr2, n1));

