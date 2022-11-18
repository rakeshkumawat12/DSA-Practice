function findLongestConseqSubseq(arr, n) {
    let st = new Set()

    for (let i = 0; i < n; i++) {
        st.add(arr[i])
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!st.has(arr[i] - 1)) {
            let val = arr[i] + 1;
            while (st.has(val)) val++;
            ans = Math.max(ans, val - arr[i]);
        }
    }
    console.log(ans)
}

let arr = [1, 9, 3, 10, 4, 20, 2, 5]
let n = arr.length;
findLongestConseqSubseq(arr, n)