class Graph {
    constructor(v) {
        this.V = v
        this.adj = new Array(this.V)
        for (let i = 0; i < this.V; i += 1) {
            this.adj[i] = new Array()
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w)
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;

        for (let i = 0; i < this.adj[v].length; i++) {
            if (!visited[this.adj[v][i]]) {
                this.topologicalSortUtil(this.adj[v][i], visited, stack)
            }
        }

        stack.push(v);
    }

    topologicalSort() {
        let stack = new Array()

        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++) {
            visited[i] = false;
        }

        for (let i = 0; i < this.V; i++) {
            if (visited[i] == false) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        while (stack.length != 0) {
            console.log(stack.pop())
        }
    }
}

var g = new Graph(6)
g.addEdge(5, 2)
g.addEdge(5, 0)
g.addEdge(4, 0)
g.addEdge(4, 1)
g.addEdge(2, 3)
g.addEdge(3, 1)

g.topologicalSort()
