function rotatematrix(mat) {
    let n = mat.length;

    //transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i]
            mat[j][i] = temp
        }
    }

    //column reverse
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[i][n - 1 - j]
            mat[i][n - 1 - j] = temp
        }
    }
    console.log(mat)

}

let mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

rotatematrix(mat);
