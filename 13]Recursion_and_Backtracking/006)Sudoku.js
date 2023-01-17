let N = 9;

function solveSudoku(grid, row, col) {
    if (row == N - 1 && col == N)
        return true;

    if (col == N) {
        row++;
        col = 0;
    }

    if (grid[row][col] != 0)
        return solveSudoku(grid, row, col + 1);

    for (let num = 1; num < 10; num++) {

        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;

            if (solveSudoku(grid, row, col + 1))
                return true;
        }

        grid[row][col] = 0;
    }
    return false;
}

function print(grid) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++)
            console.log(grid[i][j]);
    }
}

function isSafe(grid, row, col, num) {

    for (let x = 0; x <= 8; x++)
        if (grid[row][x] == num)
            return false;

    for (let x = 0; x <= 8; x++)
        if (grid[x][col] == num)
            return false;

    let startRow = row - row % 3,
        startCol = col - col % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] == num)
                return false;

    return true;
}

let grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0],
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0]]

if (solveSudoku(grid, 0, 0))
    print(grid)
else
    console.log("no solution exists ")


