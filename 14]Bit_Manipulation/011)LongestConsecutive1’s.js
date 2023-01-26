function maxConsecutiveOnes(x) {
    let count = 0;

    while (x != 0) {
        x = (x & (x << 1));
        count++;
    }
    return count;
}

console.log(maxConsecutiveOnes(14));

