function findSum(arr, n) {
    var count = 0;
    let sum = 0;
    let i = -1;
    let mp = new Map();
    mp.set(0, 1)
    while (i < n) {
        i++;
        sum += arr[i];
        if (mp.has(sum)) {
            count += mp.get(sum);
            mp.set(sum, mp.get(sum) + 1)
        }
        else {
            mp.set(sum, 1);
        }
    }
    console.log(count)
}


let arr = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7]
let n = arr.length;
findSum(arr, n)