
function longestCommonSubString(X, Y, m, n) {
    var DP = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    var result = 0;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                DP[i][j] = 0;
            else if (X[i - 1] == Y[j - 1]) {
                DP[i][j] = DP[i - 1][j - 1] + 1;
                result = Math.max(result, DP[i][j]);
            } else
                DP[i][j] = 0;
        }
    }
    return result;
}



var X = "ABC";
var Y = "BBC";

var m = X.length;
var n = Y.length;
console.log(longestCommonSubString(X, Y, m, n));


