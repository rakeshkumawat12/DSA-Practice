class qentry {
    constructor() {
        this.v = 0;
        this.dist = 0;
    }
}

function getMinDiceThrows(move, n) {
    let visited = new Array(n);
    for (let i = 0; i < n; i++)
        visited[i] = false;
    let q = [];
    let qe = new qentry();
    qe.v = 0;
    qe.dist = 0;

    visited[0] = 1;
    q.push(qe);

    while (q.length != 0) {
        qe = q.shift();
        let v = qe.v;

        if (v == n - 1)
            break;

        for (let j = v + 1; j <= (v + 6) && j < n; ++j) {
            if (visited[j] == 0) {
                let a = new qentry();
                a.dist = (qe.dist + 1);
                visited[j] = 1;

                if (move[j] != -1)
                    a.v = move[j];
                else
                    a.v = j;
                q.push(a);
            }
        }
    }

    return qe.dist;
}

let N = 30;
let moves = new Array(N);
for (let i = 0; i < N; i++)
    moves[i] = -1;

moves[2] = 21;
moves[4] = 7;
moves[10] = 25;
moves[19] = 28;

moves[26] = 0;
moves[20] = 8;
moves[16] = 3;
moves[18] = 6;

console.log(getMinDiceThrows(moves, N));


