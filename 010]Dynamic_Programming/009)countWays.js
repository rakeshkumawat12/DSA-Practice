function countWays(coins, n, sum) {
    var table = Array(sum + 1).fill(0);

    table[0] = 1;

    for (i = 0; i < n; i++)
        for (j = coins[i]; j <= sum; j++)
            table[j] += table[j - coins[i]];

    return table[sum];
}

var coins = [1, 2, 3];
var n = coins.length;
var sum = 4;
console.log(countWays(coins, n, sum));