let SIZE = 26;
let M = 3;
let N = 3;

class TrieNode {
    constructor() {
        this.leaf = false;
        this.Child = new Array(SIZE);
        for (let i = 0; i < SIZE; i++)
            this.Child[i] = null;
    }
}

function insert(root, Key) {
    let n = Key.length;
    let current = root;

    for (let i = 0; i < n; i++) {
        let index = Key[i].charCodeAt(0) - 'A'.charCodeAt(0);

        if (current.Child[index] == null)
            current.Child[index] = new TrieNode();

        current = current.Child[index];
    }

    current.leaf = true;
}

function isSafe(i, j, visited) {
    return (i >= 0 && i < M && j >= 0 && j < N && !visited[i][j]);
}


function searchWord(root, boggle, i, j, visited, str) {
    if (root.leaf == true)
        console.log(str);

    if (isSafe(i, j, visited)) {
        visited[i][j] = true;

        for (let K = 0; K < SIZE; K++) {
            if (root.Child[K] != null) {
                let ch = String.fromCharCode(K + 'A'.charCodeAt(0));

                if (isSafe(i + 1, j + 1, visited) && boggle[i + 1][j + 1] == ch)
                    searchWord(root.Child[K], boggle, i + 1, j + 1, visited, str + ch);
                if (isSafe(i, j + 1, visited) && boggle[i][j + 1] == ch)
                    searchWord(root.Child[K], boggle, i, j + 1, visited, str + ch);
                if (isSafe(i - 1, j + 1, visited) && boggle[i - 1][j + 1] == ch)
                    searchWord(root.Child[K], boggle, i - 1, j + 1, visited, str + ch);
                if (isSafe(i + 1, j, visited) && boggle[i + 1][j] == ch)
                    searchWord(root.Child[K], boggle, i + 1, j, visited, str + ch);
                if (isSafe(i + 1, j - 1, visited) && boggle[i + 1][j - 1] == ch)
                    searchWord(root.Child[K], boggle, i + 1, j - 1, visited, str + ch);
                if (isSafe(i, j - 1, visited) && boggle[i][j - 1] == ch)
                    searchWord(root.Child[K], boggle, i, j - 1, visited, str + ch);
                if (isSafe(i - 1, j - 1, visited) && boggle[i - 1][j - 1] == ch)
                    searchWord(root.Child[K], boggle, i - 1, j - 1, visited, str + ch);
                if (isSafe(i - 1, j, visited) && boggle[i - 1][j] == ch)
                    searchWord(root.Child[K], boggle, i - 1, j, visited, str + ch);
            }
        }

        visited[i][j] = false;
    }
}

function findWords(boggle, root) {
    let visited = new Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            visited[i][j] = false;
        }
    }
    let current = root;

    let str = "";

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (current.Child[(boggle[i][j]).charCodeAt(0) - 'A'.charCodeAt(0)] != null) {
                str = str + boggle[i][j];
                searchWord(current.Child[(boggle[i][j]).charCodeAt(0) - 'A'.charCodeAt(0)],
                    boggle, i, j, visited, str);
                str = "";
            }
        }
    }
}

let dictionary = ["GEEKS", "FOR", "QUIZ", "GEE"];
let root = new TrieNode();

let n = dictionary.length;
for (let i = 0; i < n; i++)
    insert(root, dictionary[i]);

let boggle = [['G', 'I', 'Z'],
['U', 'E', 'K'],
['Q', 'S', 'E']];

findWords(boggle, root);
