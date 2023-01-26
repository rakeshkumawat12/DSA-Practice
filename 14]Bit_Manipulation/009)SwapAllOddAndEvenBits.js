function swapBits(x) {
    let even_bits = x & 0xAAAAAAAA;

    let odd_bits = x & 0x55555555;

    even_bits >>= 1;

    odd_bits <<= 1;

    return (even_bits | odd_bits);
}

let x = 23;
console.log(swapBits(x));