function longestCommonPrefix(arr, n) {
    let count = 0;
    let flag = 0;
    let min = 1000;
    let s = "";
    for (let i = 0; i < n; i++) {
        let len = arr[i].length;
        if (len < min) {
            min = len;
            s = arr[i];
        }
    }
    for (let i = 0; i < min; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j][i] != s[i]) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            break;
        count++;
    }
    if (count == 0)
        console.log(-1);
    else
        console.log(s.substring(0, count))

}

let arr = ["geeksforgeeks", "geeks",
    "geek", "geezer"];
let n = arr.length;
longestCommonPrefix(arr, n)