function getRightMostSetBit(n) {
    if (n == 0)
        return 0;

    return Math.log2(n & -n) + 1;
}

function posOfRightMostDiffBit(m, n) {
    return getRightMostSetBit(m ^ n);
}


let m = 52;
let n = 24;
console.log(posOfRightMostDiffBit(m, n));
