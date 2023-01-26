function toggleBitsFromLToR(N, L, R) {
    let res = N;
    for (let i = L; i <= R; i++) {
        if ((N & (1 << (i - 1))) != 0) {
            res = res ^ (1 << (i - 1));
        }
        else {
            res = res | (1 << (i - 1));
        }
    }
    return res;
}

let n = 50;
let l = 2, r = 5;
console.log(toggleBitsFromLToR(n, l, r));



