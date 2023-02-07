class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(26).fill(null);
    }
}

let root = new TrieNode();

function insert(key) {
    let length = key.length;

    let current = root;

    for (let level = 0; level < length; level++) {
        let index = key.charCodeAt(level) - 'a'.charCodeAt(0);
        if (current.children[index] == null)
            current.children[index] = new TrieNode();

        current = current.children[index];
    }

    current.isEndOfWord = true;
}

function wordCount(root) {
    let result = 0;

    if (root.isEndOfWord)
        result++;

    for (let i = 0; i < 26; i++)
        if (root.children[i] != null)
            result += wordCount(root.children[i]);

    return result;
}

let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their"];

for (let i = 0; i < keys.length; i++)
    insert(keys[i]);

console.log(wordCount(root));

