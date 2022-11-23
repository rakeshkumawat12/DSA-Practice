function longestPrefixSuffix(s) {
    var n = s.length;
    if (n < 2) {
        return 0;
    }

    var len = 0;
    var i = (n + 1) / 2;
    while (i < n) {
        if (s[i] == s[len]) {
            ++len;
            ++i;
        }
        else {
            i = i - len + 1;
            len = 0;
        }
    }
    console.log(len);

}
var s = "blablabla";
longestPrefixSuffix(s)
