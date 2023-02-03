class Graph {
    constructor(V) {
        this.V = V;
        this.adj = new Array(V);
        for (let i = 0; i < V; i++)
            this.adj[i] = [];
    }

    addEdge(v, w) {
        this.adj[v].push(w);
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;
        this.adj[v].forEach(i => {
            if (!visited[i])
                this.topologicalSortUtil(i, visited, stack);
        })
        stack.push(v);
    }

    topologicalSort() {
        let stack = [];

        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            visited[i] = false;

        for (let i = 0; i < this.V; i++) {
            if (visited[i] == false)
                this.topologicalSortUtil(i, visited, stack);
        }

        while (stack.length > 0) {
            let x = stack.pop() + 'a'.charCodeAt(0);
            console.log(String.fromCharCode(x) + " ");
        }
    }
}

function printOrder(words, n, alpha) {
    let g = new Graph(alpha);

    for (let i = 0; i < n - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1[j] != word2[j]) {
                g.addEdge(word1.charCodeAt(j) - 'a'.charCodeAt(0), word2.charCodeAt(j) - 'a'.charCodeAt(0));
                break;
            }
        }
    }

    g.topologicalSort();
}

words = ["caa", "aaa", "aab"];
printOrder(words, 3, 3);


