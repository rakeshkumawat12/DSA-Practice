function PositionRightmostSetbit(n) {
    return Math.log2(n & -n) + 1;
}

let n = 18;
console.log(PositionRightmostSetbit(n));


