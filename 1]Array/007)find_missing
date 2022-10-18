// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function findMissing(arr, n){
    let sum = n + 1;
    let total = sum * (sum + 1)/2;
    let totalNumbers = 0;
    for (let i=0; i<n; i++){
        totalNumbers += arr[i];
    }
    console.log(total - totalNumbers)
}

let arr = [1,2,3,5]
let n = arr.length;
findMissing(arr, n)