
function printMinIndexChar(str, patt) {
    let minIndex = Number.MAX_VALUE;
    let m = str.length;
    let n = patt.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (patt[i] == str[j] && j < minIndex) {
                minIndex = j;
                break;
            }
        }
    }
    if (minIndex != Number.MAX_VALUE)
        console.log(minIndex);
    else
        console.log("-1");
}


let str = "geeksforgeeks";
let patt = "set";
printMinIndexChar(str, patt);


