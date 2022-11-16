function rowWithMax1s(A, m, n) {
    let col = n - 1;
    let row = -1;

    for (let i = 0; i < m; i++) {
        for (let j = col; j >= 0; j--) {
            if (A[i][j] == 1) {
                row = i;
                col--;
            }
            else {
                break
            }
        }
    }
    console.log(row)
}

let A = [[0, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]]
let m = A.length;
let n = A[0].length;
rowWithMax1s(A, m, n)