function removeDuplicates(s) {
    let temp = "";
    let i = 0;
    while (i < s.length) {
        if (s[i] != s[i + 1]) {
            temp += s[i];
        }
        else {
            while (s[i] == s[i + 1]) {
                i++;
            }
        }
        i++;
    }
    if (s == temp) {
        return s;
    } else {
        return removeDuplicates(temp);
    }
}


let s = "geeksforgeek";
console.log(removeDuplicates(s));