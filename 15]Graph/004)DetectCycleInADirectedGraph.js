let V;
let adj = [];
function Graph(v) {
    V = v;
    for (let i = 0; i < V; i++)
        adj.push([]);
}

function isCyclicUtil(i, visited, recStack) {
    if (recStack[i])
        return true;

    if (visited[i])
        return false;

    visited[i] = true;

    recStack[i] = true;
    let children = adj[i];

    for (let c = 0; c < children.length; c++)
        if (isCyclicUtil(children, visited, recStack))
            return true;

    recStack[i] = false;

    return false;
}

function addEdge(source, dest) {
    adj.push(dest);
}

function isCyclic() {
    let visited = new Array(V);
    let recStack = new Array(V);
    for (let i = 0; i < V; i++) {
        visited[i] = false;
        recStack[i] = false;
    }

    for (let i = 0; i < V; i++)
        if (isCyclicUtil(i, visited, recStack))
            return true;

    return false;
}

Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);
console.log(isCyclic());

