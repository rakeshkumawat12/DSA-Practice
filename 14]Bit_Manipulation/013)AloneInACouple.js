function getOddOccurrence(arr, n) {
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }
        if (count % 2 != 0)
            return arr[i];
    }
    return -1;
}

let arr = [2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2];
let n = arr.length;

console.log(getOddOccurrence(arr, n));  