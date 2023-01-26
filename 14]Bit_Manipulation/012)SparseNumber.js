function checkSparse(n) {
    if ((n & (n >> 1)) > 0)
        return true;

    return false;
}

console.log(checkSparse(12));  