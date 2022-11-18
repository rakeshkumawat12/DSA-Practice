function find4Numbers(arr, n, x) {
    function compare(a, b) {
        return a - b
    }
    arr.sort(compare);
    for (let i = 0; i < n - 4; i++) {
        for (let j = i + 1; j < n - 3; j++) {
            let l = j + 1;
            let r = n - 1;
            while (l < r) {
                if (arr[i] + arr[j] + arr[l] + arr[r] == x) {
                    console.log(arr[i], arr[j], arr[l], arr[r])
                    l++;
                    r--;
                }
                else if (arr[i] + arr[j] + arr[l] + arr[r] < x)
                    l++;
                else
                    r--;
            }
        }
    }
}

let arr = [10, 2, 3, 4, 5, 7, 8]
let n = arr.length;
let x = 23;
find4Numbers(arr, n, x)

// 3+5+7+8=23

