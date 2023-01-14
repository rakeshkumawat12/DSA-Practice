function towerOfHanoi(N, from, to, aux) {
    if (N == 1) {
        console.log("move disk " + N + " from rod " + from + " to rod " + to);
        return 1;
    }
    towerOfHanoi(N - 1, from, aux, to);
    console.log("move disk " + N + " from rod " + from + " to rod " + to);
    towerOfHanoi(N - 1, aux, to, from);
    return Math.pow(2, N) - 1
}


var N = 3;
console.log(towerOfHanoi(N, 'A', 'C', 'B'));

// move disk 1 from rod A to rod C
// move disk 2 from rod A to rod B
// move disk 1 from rod C to rod B
// move disk 3 from rod A to rod C
// move disk 1 from rod B to rod A
// move disk 2 from rod B to rod C
// move disk 1 from rod A to rod C
// 7


