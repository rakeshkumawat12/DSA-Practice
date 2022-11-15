function spirallyTraversing(A, r, c) {
    let spiral = [];
    let size1 = r * c; let size2 = 0;
    let top = 0;
    let bottom = r - 1;
    let left = 0;
    let right = c - 1;

    while (size2 < size1) {
        for (let i = left; i <= right && size2 < size1; i++) {
            spiral.push(A[top][i]);
            size2++;
        }
        top++;

        for (let i = top; i <= bottom && size2 < size1; i++) {
            spiral.push(A[i][right])
            size2++
        }
        right--;

        for (let i = right; i >= left && size2 < size1; i--) {
            spiral.push(A[bottom][i])
            size2++;
        }
        bottom--;

        for (let i = bottom; i >= top && size2 < size1; i--) {
            spiral.push(A[i][left])
            size2++;
        }
        left++
    }
    console.log(spiral)
}

let A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
let r = A.length;
let c = A[0].length;
spirallyTraversing(A, r, c)