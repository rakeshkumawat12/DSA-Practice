function search(arr, l, h, key) {
    if (l > h)
        return -1;

    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == key)
        return mid;

    if (arr[l] <= arr[mid]) {
        if (key >= arr[l] && key <= arr[mid])
            return search(arr, l, mid - 1, key);
        return search(arr, mid + 1, h, key);
    }

    if (key >= arr[mid] && key <= arr[h])
        return search(arr, mid + 1, h, key);
    return search(arr, l, mid - 1, key);
}


let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let n = arr.length;
let key = 4;
console.log(search(arr, 0, n - 1, key));



