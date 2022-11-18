function countDistinctElements(arr, k) {
    let mp = new Map();

    for (let i = 0; i < k; i++) {
        mp.set(arr[i], mp.get(arr[i], 0) + 1);
    }
    console.log(mp.size)
    for (let i = k; i < arr.length; i++) {
        if (mp.get(arr[i - k] == 1))
            mp.delete(arr[i - k]);
        else {
            mp.set(arr[i - k], mp.get(arr[i - k]) - 1);
        }
        mp.set(arr[i], mp.get(arr[i], 0) + 1);

        console.log(mp.size);
    }
}

let arr = [1, 2, 2, 1, 3, 1, 1, 3]
let k = 4;
countDistinctElements(arr, k)