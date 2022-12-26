function minCost(cost, m, n) {
    if (n < 0 || m < 0)
        return Number.MAX_VALUE;

    else if (m == 0 && n == 0)
        return cost[m][n];
        
    else
        return cost[m][n] + Math.min(minCost(cost, m - 1, n - 1),
            minCost(cost, m - 1, n),
            minCost(cost, m, n - 1));
}

var cost = [[1, 2, 3],
[4, 8, 2],
[1, 5, 3]];

console.log(minCost(cost, 2, 2));


