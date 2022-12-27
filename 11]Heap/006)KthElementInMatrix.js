function kthSmallest(mat, n, k) {
    let a = new Array(n * n)
    let v = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            a[v] = mat[i][j];
            v++;
        }
    }

    a.sort();
    let result = a[k - 1];
    return result;
}

let mat = [[10, 20, 30, 40],
[15, 25, 35, 45],
[25, 29, 37, 48],
[32, 33, 39, 50]]
let n = mat.length;
let res = kthSmallest(mat, n, 7)
console.log(res)


