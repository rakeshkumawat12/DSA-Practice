function isSubset(arr1, arr2, m, n) {
    let st = new Set();
    for (let i = 0; i < m; i++) {
        st.add(arr1[i])
    }
    for (let j = 0; j < n; j++) {
        if (!st.has(arr2[j]))
            console.log(false)
    }
    console.log(true)
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1]
let m = arr1.length;
let n = arr2.length;
isSubset(arr1, arr2, m, n)