class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++)
            this.adj[i] = [];
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }

    isCyclicUtil(v, visited, parent) {
        visited[v] = true;
        for (let i of this.adj[v].values()) {
            if (!visited[i]) {
                if (this.isCyclicUtil(i, visited, v))
                    return true;
            }

            else if (i != parent)
                return true;
        }
        return false;
    }

    isCyclic() {
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            if (!visited[i]) {
                if (this.isCyclicUtil(i, visited, -1))
                    return true;
            }
        return false;
    }
}

g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);
console.log(g.isCyclic())
