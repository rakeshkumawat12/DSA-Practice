function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log("Got it")
        }
    }
}
let arr1 = [7, 8, 9]
search(arr, 9)


function insert(arr, position, element) {
    for (i = arr.length; i > position; i--) {
        arr[i] = arr[i - 1];
    }
    arr[position] = element;
    console.log(arr)
}
let arr2 = [6, 7, 9, 0]
insert(arr, 2, 8)


function reverse(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
    console.log(arr)
}

let arr3 = [1, 2, 3, 4]
reverse(arr)