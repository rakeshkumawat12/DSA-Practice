function search(arr, n){
    let ans = -1;
    for (let i = 0; i < n; i += 2) {
        if (arr[i] != arr[i + 1]) {
            ans = arr[i];
            break;
        }
    }
 
    if (arr[n - 2] != arr[n - 1])
            ans = arr[n-1];
 
    console.log(ans);
}

let arr = [ 1, 1, 2, 4, 4, 5, 5, 6, 6 ];  //3
let n = arr.length;
search(arr, n);