var dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
var n = dictionary.length;
var M = 3,
    N = 3;

function isWord(str) {
    for (var i = 0; i < n; i++) if (str == dictionary[i]) return true;
    return false;
}

function findWordsUtil(boggle, visited, i, j, str) {
    visited[i][j] = true;
    str = str + boggle[i][j];

    if (isWord(str)) console.log(str);

    for (var row = i - 1; row <= i + 1 && row < M; row++)
        for (var col = j - 1; col <= j + 1 && col < N; col++)
            if (row >= 0 && col >= 0 && !visited[row][col])
                findWordsUtil(boggle, visited, row, col, str);

    str = "" + str[str.length - 1];
    visited[i][j] = false;
}

function findWords(boggle) {
    var visited = Array.from(Array(M), () => new Array(N).fill(0));

    var str = "";

    for (var i = 0; i < M; i++)
        for (var j = 0; j < N; j++)
            findWordsUtil(boggle, visited, i, j, str);
}

var boggle = [
    ["G", "I", "Z"],
    ["U", "E", "K"],
    ["Q", "S", "E"],
];

findWords(boggle);

