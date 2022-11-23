// ----X
function rabinKarp(S, pat) {
    if (pat.length > S.length || pat.length == 0)
        console.log(-1);

    let alphabets = 26;
    let patternHashCode = HashFunction(pat, alphabets)
    let window = pat.length;
    var index = -1;
    let substringHashCode = HashFunction(S.substring(0, window), alphabets);
    for (let i = 1; i < S.length - window + 1; i++) {
        let prev = S.charAt(i - 1) * Math.pow(alphabets, pat.length - 1);
        substringHashCode = (substringHashCode - prev) * alphabets + S.charAt(i + window - 1);
        if (substringHashCode == patternHashCode) {
            if (S.substring(i, i + window).equal(pat)) {
                console.log(i)
            }
        }
    }
    console.log(index);
}
function HashFunction(inp, alphabets) {
    let k = inp.length - 1;
    let res = 0;
    for (let i = 0; i < inp.length; i++) {
        let asc = inp.charAt(i)
        res = res + (asc * Math.pow(alphabets, k))
        k--;
    }
    return res
}


let S = "batmanandrobinarebat";
let pat = "bat"
rabinKarp(S, pat)