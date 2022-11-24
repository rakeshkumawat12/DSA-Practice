
function findAndPrintUncommonChars(str1, str2) {
    var MAX_CHAR = 26;
    var present = Array(MAX_CHAR);
    for (var i = 0; i < MAX_CHAR; i++)
        present[i] = 0;

    var l1 = str1.length;
    var l2 = str2.length;

    for (var i = 0; i < l1; i++)
        present[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;

    for (var i = 0; i < l2; i++) {
        if (present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1
            || present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] == -1)
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = -1;

        else
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
    }

    for (var i = 0; i < MAX_CHAR; i++)
        if (present[i] == 1 || present[i] == 2)
            console.log((String.fromCharCode(i + 'a'.charCodeAt(0))));
}

var str1 = "characters";
var str2 = "alphabets";
findAndPrintUncommonChars(str1, str2);

