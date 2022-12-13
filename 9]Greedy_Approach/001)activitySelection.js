function maxActivities(arr, n) {
    let selected = [];

    activity = activity.sort(function (a, b) { return a[1] - b[1] })

    let i = 0;
    selected.push(arr[i])

    for (let j = 1; j < n; j++) {
        if (arr[j][0] >= arr[i][1]) {
            selected.push(arr[j]);
            i = j;
        }
    }
    return selected;
}

activity = [[5, 9], [1, 2], [3, 4], [0, 6], [5, 7], [8, 9]];
n = activity.length;
console.log(maxActivities(activity, n))   // [ [ 1, 2 ], [ 3, 4 ], [ 5, 7 ], [ 8, 9 ] ]
