
function longestUniqueSubsttr(s) {
    let mp = new Map();
    let maximum_length = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (mp.has(s[end])) {
            start = Math.max(start, mp.get(s[end]) + 1);
        }
        mp.set(s[end], end)
        maximum_length = Math.max(maximum_length, end - start + 1);
    }
    console.log(maximum_length);
}


let s = "geeksforgeeks"
longestUniqueSubsttr(s);



