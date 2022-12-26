// ---------Delete Root----------
function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, n, largest);
    }
}

function deleteRoot(arr, n) {
    let lastElement = arr[n - 1];

    arr[0] = lastElement;

    n = n - 1;

    heapify(arr, n, 0);

    return n;
}

function printArray(arr, n) {
    for (let i = 0; i < n; ++i)
        console.log(arr[i]);
}

let arr = [10, 5, 3, 2, 4];
let n = arr.length;
n = deleteRoot(arr, n);
printArray(arr, n);



// ----------Insert Root-------
function heapify(arr, n, i) {
    let parent = Math.floor((i - 1) / 2);

    if (arr[parent] >= 0) {
        if (arr[i] > arr[parent]) {
            let temp = arr[i];
            arr[i] = arr[parent];
            arr[parent] = temp;

            heapify(arr, n, parent);
        }
    }
}

function insertNode(arr, n, Key) {
    n = n + 1;

    arr[n - 1] = Key;

    heapify(arr, n, n - 1);

    return n;
}

function printArray(arr, n) {
    for (let i = 0; i < n; ++i)
        console.log(arr[i] + " ");
}

let arr1 = [10, 5, 3, 2, 4];
let n1 = arr.length;
let key = 15;
n = insertNode(arr1, n1, key);
printArray(arr, n);




