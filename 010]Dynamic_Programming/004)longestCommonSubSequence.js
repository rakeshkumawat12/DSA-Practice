function lcs(X, Y, m, n, dp) {
    if (m == 0 || n == 0)
        return 0;
    if (X[m - 1] == Y[n - 1])
        return dp[m][n] = 1 + lcs(X, Y, m - 1, n - 1, dp);

    if (dp[m][n] != -1) {
        return dp[m][n];
    }
    return dp[m][n] = Math.max(lcs(X, Y, m, n - 1, dp),lcs(X, Y, m - 1, n, dp));
}

let X = "AGGTAB";
let Y = "GXTXAYB";
let m = X.length;
let n = Y.length;

let dp = new Array(m + 1);
for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(-1);
}
console.log(lcs(X, Y, m, n, dp));

