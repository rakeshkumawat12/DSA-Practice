class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++)
            this.adj[i] = [];
    }

    addEdge(v, w) {
        this.adj[v].push(w);
    }

    BFS(s) {
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            visited[i] = false;

        let queue = [];

        visited[s] = true;
        queue.push(s);

        while (queue.length > 0) {
            s = queue[0];
            console.log(s);
            queue.shift();

            this.adj[s].forEach((adjacent, i) => {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            });
        }
    }
}

g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.BFS(2);

