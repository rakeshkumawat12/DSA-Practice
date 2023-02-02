class Pair {
    constructor(x, y) {
        this.first = x;
        this.second = y;
    }
}

function isSafe(mat, visited, x, y) {
    return (x >= 0 && x < mat.length && y >= 0 && y < mat[0].length && mat[x][y] == 1 && !visited[x][y]);
}

function findShortestPath(mat, visited, i, j, x, y, min_dist, dist) {
    if (i == x && j == y) {
        min_dist = Math.min(dist, min_dist);
        return min_dist;
    }
    visited[i][j] = true;
    if (isSafe(mat, visited, i + 1, j)) {
        min_dist = findShortestPath(mat, visited, i + 1, j, x, y, min_dist, dist + 1);
    }
    if (isSafe(mat, visited, i, j + 1)) {
        min_dist = findShortestPath(mat, visited, i, j + 1, x, y, min_dist, dist + 1);
    }
    if (isSafe(mat, visited, i - 1, j)) {
        min_dist = findShortestPath(mat, visited, i - 1, j, x, y, min_dist, dist + 1);
    }
    if (isSafe(mat, visited, i, j - 1)) {
        min_dist = findShortestPath(mat, visited, i, j - 1, x, y, min_dist, dist + 1);
    }
    visited[i][j] = false;
    return min_dist;
}

function findShortestPathLength(mat, src, dest) {
    if (mat.length == 0 || mat[src.first][src.second] == 0 || mat[dest.first][dest.second] == 0)
        return -1;

    let row = mat.length;
    let col = mat[0].length;
    let visited = [];
    for (var i = 0; i < row; i++)
        visited.push(new Array(col));

    let dist = Number.MAX_SAFE_INTEGER;
    dist = findShortestPath(mat, visited, src.first,
        src.second, dest.first,
        dest.second, dist, 0);

    if (dist != Number.MAX_SAFE_INTEGER)
        return dist;
    return -1;
}


let mat = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];

let src = new Pair(0, 0);
let dest = new Pair(3, 4);
console.log(findShortestPathLength(mat, src, dest));


