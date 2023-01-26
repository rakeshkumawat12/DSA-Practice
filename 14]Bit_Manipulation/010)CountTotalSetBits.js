function findLargestPower(n) {
    var x = 0;
    while ((1 << x) <= n)
        x++;
    return x - 1;
}

function countSetBits(n) {
    if (n <= 1)
        return n;
    var x = findLargestPower(n);
    return (x * Math.pow(2, (x - 1))) + (n - Math.pow(2, x) + 1) + countSetBits(n - Math.pow(2, x));
}

var N = 17;
console.log(countSetBits(N));


