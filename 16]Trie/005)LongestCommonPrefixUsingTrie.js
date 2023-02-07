function longestCommonPrefix(arr, n) {
    var prefix = ""
    var first = arr[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < n; j++) {
            if (i > arr[j].length - 1 || first[i] != arr[j][i]) return prefix;
        }
        prefix += first[i];
    }
    return prefix
}

let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
let n = arr.length;
console.log(longestCommonPrefix(arr, n))