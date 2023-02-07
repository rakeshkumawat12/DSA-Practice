function printArray(arr, row, col) {
    let set = new Set();
    for (let i = 0; i < row; i++) {
        let s = "";

        for (let j = 0; j < col; j++)
            s += (arr[i][j]).toString();

        if (!set.has(s)) {
            set.add(s);
            console.log(s);
        }
    }
}

let arr = [[0, 1, 0, 0, 1],
[1, 0, 1, 1, 0],
[0, 1, 0, 0, 1],
[1, 1, 1, 0, 0]];
printArray(arr, 4, 5);


