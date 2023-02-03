var INF = 99999;
class AllPairShortestPath {
    constructor() {
        this.V = 4;
    }

    floydWarshall(graph) {
        var dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));

        for (var i = 0; i < this.V; i++) {
            for (var j = 0; j < this.V; j++) {
                dist[i][j] = graph[i][j];
            }
        }

        for (var k = 0; k < this.V; k++) {
            for (var i = 0; i < this.V; i++) {
                for (var j = 0; j < this.V; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        this.printSolution(dist);
    }

    printSolution(dist) {
        for (var i = 0; i < this.V; ++i) {
            for (var j = 0; j < this.V; ++j) {
                if (dist[i][j] == INF) {
                    console.log("INF");
                } else {
                    console.log(dist[i][j]);
                }
            }
        }
    }
}

var graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0],
];

var a = new AllPairShortestPath();

a.floydWarshall(graph);

