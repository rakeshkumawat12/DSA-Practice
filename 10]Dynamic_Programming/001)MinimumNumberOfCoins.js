
function minCoins(coins, n, v) {
    let DP = new Array(v + 1);
    DP[0] = 0;
    for (let i = 1; i <= v; i++) {
        DP[i] = Number.MAX_VALUE;
    }

    for (let i = 1; i <= v; i++) {
        for (let j = 0; j < n; j++)
            if (coins[j] <= i) {
                let subAns = DP[i - coins[j]];
                if (subAns != Number.MAX_VALUE && subAns + 1 < DP[i])
                    DP[i] = subAns + 1;
            }
    }

    if (DP[v] == Number.MAX_VALUE)
        return -1;

    return DP[v];
}


let coins = [9, 6, 5, 1];
let n = coins.length;
let v = 11;
console.log(minCoins(coins, n, v))






