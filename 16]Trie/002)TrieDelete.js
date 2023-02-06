class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isEndOfWord = false;
    }
}

function insert(root, key) {
    let current = root;

    for (let i = 0; i < key.length; i++) {
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (current.children[index] == null)
            current.children[index] = new TrieNode();

        current = current.children[index];
    }

    current.isEndOfWord = true;
}

function search(root, key) {
    let current = root;

    for (let i = 0; i < key.length; i++) {
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (current.children[index] == null)
            return false;

        current = current.children[index];
    }

    return (current != null && current.isEndOfWord);
}

function isEmpty(root) {
    for (let i = 0; i < 26; i++)
        if (root.children[i] != null)
            return false;
    return true;
}

function remove(root, key, depth) {
    if (root == null)
        return null;

    if (depth == key.length) {

        if (root.isEndOfWord)
            root.isEndOfWord = false;

        if (isEmpty(root)) {
            root = null;
        }

        return root;
    }

    let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
    root.children[index] =
        remove(root.children[index], key, depth + 1);

    if (isEmpty(root) && root.isEndOfWord == false) {
        root = null;
    }

    return root;
}

let keys = ["the", "a", "there",
    "answer", "any", "by",
    "bye", "their", "hero", "heroplane"];
let n = keys.length;

let root = new TrieNode();

for (let i = 0; i < n; i++)
    insert(root, keys[i]);

if (search(root, "the"))
    console.log("Yes");
else
    console.log("No");

remove(root, "heroplane", 0);

if (search(root, "heroplane"))
    console.log("Yes");
else
    console.log("No");



