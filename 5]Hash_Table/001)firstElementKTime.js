function firstElementKTime(arr, n, k) {
    let mp = new Map();
    for (let i = 0; i < n; i++) {
        if (mp[arr[i]]) {
            mp[arr[i]]++;
            if (mp[arr[i]] == k) {
                return arr[i]
            }
        }
        else {
            mp[arr[i]] = 1;
            if (mp[arr[i]] == k) {
                return arr[i]
            }
        }
    }

    return -1;
}

let arr = [1, 7, 4, 3, 4, 8, 7]
let n = arr.Length;
let k = 2;
firstElementKTime(arr, n, k);