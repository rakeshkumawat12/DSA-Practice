function isKthBitSet(n, k) {
    if ((n & (1 << k)) != 0)
        return ("SET");
    else
        return ("NOT SET");
}

let n = 4, k = 2;
console.log(isKthBitSet(n, k));  