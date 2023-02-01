let ROW = 5, COL = 5;
function isSafe(M, row, col, visited) {
    return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL) && (M[row][col] == 1 && !visited[row][col]);
}

function DFS(M, row, col, visited) {
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    visited[row][col] = true;

    for (let k = 0; k < 8; ++k) {
        if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) {
            DFS(M, row + rowNbr[k], col + colNbr[k], visited);
        }
    }

}

function countIslands(M) {
    let visited = new Array(ROW);
    for (let i = 0; i < ROW; i++) {
        visited[i] = new Array(COL);
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            visited[i][j] = false;
        }
    }

    let count = 0;
    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            if (M[i][j] == 1 && !visited[i][j]) {
                DFS(M, i, j, visited);
                count++;
            }
        }
    }
    return count;
}


let M = [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1],
[1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];
console.log(countIslands(M));
