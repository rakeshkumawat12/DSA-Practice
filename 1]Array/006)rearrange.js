// Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
// Note: Modify the original array itself.

function rearrange(arr, n) {
    let temp = new Array(n);

    let small = 0;
    let large = n - 1;

    let flag = true;

    for (let i = 0; i < n; i++) {
        if (flag)
            temp[i] = arr[large--];
        else
            temp[i] = arr[small++];
        flag = !flag;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
        console.log(`${arr}`)
    }
}
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
rearrange(arr, n);