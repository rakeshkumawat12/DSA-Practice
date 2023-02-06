class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(26);
        for (let i = 0; i < 26; i++)
            this.children[i] = null;
    }
}

let root;

function insert(key) {
    let length = key.length;

    let current = root;

    for (let level = 0; level < length; level++) {
        let index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if (current.children[index] == null)
            current.children[index] = new TrieNode();

        current = current.children[index];
    }

    current.isEndOfWord = true;
}

function search(key) {
    let length = key.length;
    let current = root;

    for (let level = 0; level < length; level++) {
        let index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);

        if (current.children[index] == null)
            return false;

        current = current.children[index];
    }

    return (current.isEndOfWord);
}

let keys = ["the", "a", "there", "answer", "any",
    "by", "bye", "their"];


root = new TrieNode();

for (let i = 0; i < keys.length; i++)
    insert(keys[i]);

console.log(search("the"))
console.log(search("these"))


