
function atoi(s) {
    let res = 0;
    for (let i = 0; i < s.length; ++i) {
        res = res * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
    }
    console.log(res);
}

let s = "123"
atoi(s)