function removeDuplicate(str, n) {
    var index = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (str[i] == str[j]) {
                break;
            }
        }
        if (j == i) {
            str[index++] = str[i];
        }
    }

    console.log(str.join("").slice(str, index));
}

var str = "geeksforgeeks".split("");
var n = str.length;
removeDuplicate(str, n);
