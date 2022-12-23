function minJumps(arr, n) {
    var jumps = Array.from({ length: n }, (_, i) => 0);

    if (n == 0 || arr[0] == 0)
        return Number.MAX_VALUE;

    jumps[0] = 0;

    for (var i = 1; i < n; i++) {
        jumps[i] = Number.MAX_VALUE;
        for (var j = 0; j < i; j++) {
            if (i <= j + arr[j] && jumps[j] != Number.MAX_VALUE) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
                break;
            }
        }
    }
    return jumps[n - 1];
}

var arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

console.log(minJumps(arr, arr.length));
