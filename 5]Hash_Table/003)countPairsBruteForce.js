function countPairsBruteForce(X, Y, m, n) {
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((Math.pow(X[i], Y[j]) > Math.pow(Y[j], X[i]))) {
                ans += 1;
            }
        }
    }
    console.log(ans);
}

let X = [2, 1, 6];
let Y = [1, 5];
let m = X.length;
let n = Y.length;
findPair(X, Y, m, n)