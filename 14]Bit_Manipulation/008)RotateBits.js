let INT_BITS = 32;

function leftRotate(n, d) {
    return (n << d) | (n >> (INT_BITS - d));
}

function rightRotate(n, d) {
    return (n >> d) | (n << (INT_BITS - d));
}


let n = 16;
let d = 2;
console.log(leftRotate(n, d));
console.log(rightRotate(n, d));

