
function findLargest(d, s) {
    if (s > 9 * d) {
        return '-1';
    }

    let res = new Array(d);

    for (let i = 0; i < d; i++) {
        if (s >= 9) {
            res[i] = 9;
            s -= 9;
        }

        else {
            res[i] = s;
            s = 0;
        }
    }

    for (let i = 0; i < d; i++)
        console.log(res[i]);
}


let s = 9, d = 2;
findLargest(d, s);


