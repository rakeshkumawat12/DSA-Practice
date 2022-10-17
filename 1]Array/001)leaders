// Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 

function leaders(arr, n) {
    let v = [];
    
    let max = arr[n - 1];

    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] >= max) {
            max = arr[i];
            v.push(max);
        }
    }
    v.reverse();
    console.log(v);
}

let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
leaders(arr, n)  //17 5 2