function setKthBit(n, k) {
    return ((1 << k) | n);
}

let n = 10;
let k = 2;
console.log(setKthBit(n, k));