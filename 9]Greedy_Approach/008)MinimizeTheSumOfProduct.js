
function minValue(A, B, n) {
    A.sort(function (a, b) {
        return a - b;
    });
    B.sort(function (a, b) {
        return a - b;
    });

    let result = 0;
    for (let i = 0; i < n; i++)
        result = result + (A[i] * B[n - i - 1]);

    return result;
}

let A = [3, 1, 1];
let B = [6, 5, 4];
let n = A.length;
console.log(minValue(A, B, n));

