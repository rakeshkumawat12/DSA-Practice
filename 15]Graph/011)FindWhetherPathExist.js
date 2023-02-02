class BFSElement {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
}

let R = 4, C = 4;

function findPath(M) {
    let q = [];

    for (let i = 0; i < R; ++i) {
        for (let j = 0; j < C; ++j) {
            if (M[i][j] == 1) {
                q.push(new BFSElement(i, j));
                break;
            }
        }
    }

    while (q.length != 0) {
        let x = q.shift();

        let i = x.i;
        let j = x.j;

        if (i < 0 || i >= R || j < 0 || j >= C)
            continue;

        if (M[i][j] == 0)
            continue;

        if (M[i][j] == 2)
            return true;

        M[i][j] = 0;

        for (let k = -1; k <= 1; k += 2) {
            q.push(new BFSElement(i + k, j));
            q.push(new BFSElement(i, j + k));
        }
    }

    return false;
}

let M = [[0, 3, 0, 1],
[3, 0, 3, 3],
[2, 3, 3, 3],
[0, 3, 3, 3]];
console.log(findPath(M))