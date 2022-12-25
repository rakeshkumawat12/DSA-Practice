function eggDrop(n, k) {
    if (k == 1 || k == 0)
        return k;

    if (n == 1)
        return k;

    let min = Number.MAX_VALUE;

    for (let x = 1; x <= k; x++) {
        let res = Math.max(eggDrop(n - 1, x - 1), eggDrop(n, k - x));
        if (res < min)
            min = res;
    }
    return min + 1;
}


let n = 2, k = 10;
console.log(eggDrop(n, k));


