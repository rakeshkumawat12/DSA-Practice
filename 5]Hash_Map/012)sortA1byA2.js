function sortA1ByA2(A1, N, A2, M) {
    let mp = new Map();

    //storing all the elements of first array in map.
    for (let i = 0; i < N; i++) {
        if (!mp.has(A1[i]))
            mp.set(A1[i], 1);
        else
            mp.set(A1[i], mp.get(A1[i]) + 1);
    }
    let j = 0;
    for (let i = 0; i < M; i++) {
        //if any element of second array has value more than 0 in map, we
        //store those elements in array and decrement the count in map.
        while (mp.get(A2[i]) > 0) {
            A1[j++] = A2[i];
            mp.set(A2[i], mp.get(A2[i]) - 1);
        }
    }
    let B = new Array();

    //iterating over the map to store rest of the elements of first array.
    for (let [key, value] of mp.entries()) {
        //we store the elements if their frequency is more than 0.
        if (value > 0) {
            //storing elements as many times as their count in array B.
            while (value > 0) {
                B.push(key);
                value--;
            }
        }
    }
    //sorting the array B.
    B.sort(function (a, b) {
        return a - b;
    });

    //copying the array elements of B in the output array.
    for (let k = 0; k < B.length; k++) {
        A1[j++] = B[k];
    }

    //returning the output.
    console.log(A1);
}

let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
let A2 = [2, 1, 8, 3]
let N = A1.length;
let M = A2.length;
sortA1ByA2(A1, N, A2, M)