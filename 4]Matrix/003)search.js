function search(matrix, n, x) {
    let i = 0, j = n - 1;
    while (i < n && j >= 0) {
        if (matrix[i][j] == x)
            console.log(`${i} and ${j}`);
        if (matrix[i][j] > x)
            j--;
        else
            i++;
    }
    console.log("not found");
}

let matrix = [[3, 15, 20], [26, 33, 38], [40, 51, 56]]
search(matrix, 3, 51)
