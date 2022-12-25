function printCountDP(dist) {
    let count = new Array(dist + 1);

    count[0] = 1;
    if (dist >= 1)
        count[1] = 1;
    if (dist >= 2)
        count[2] = 2;

    for (let i = 3; i <= dist; i++)
        count[i] = count[i - 1] + count[i - 2] + count[i - 3];

    return count[dist];
}


let dist = 3;
console.log(printCountDP(dist));


