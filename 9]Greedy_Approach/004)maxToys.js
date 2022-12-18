function maxToys(cost, n, k) {
    let count = 0;
    let sum = 0;
    cost.sort(function (a, b) { return a - b });
    for (let i = 0; i < n; i++) {
        if (sum + cost[i] <= k) {
            sum = sum + cost[i]
            count++;
        }
    }
    return count;
}

let cost = [1, 12, 5, 111, 200, 1000, 10, 9, 12, 15];
let k = 50;
let n = cost.length;
console.log(maxToys(cost, n, k))