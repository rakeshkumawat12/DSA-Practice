
function isSubstring(s1, s2) {
    var M = s1.length;
    var N = s2.length;

    for (var i = 0; i <= N - M; i++) {
        var j;

        for (j = 0; j < M; j++)
            if (s2[i + j] != s1[j])
                break;

        if (j == M)
            console.log(i);
    }

    return -1;
}


var s1 = "for";
var s2 = "geeksforgeeks";
isSubstring(s1, s2);


