function longestPalSubstr(str) {
    let n = str.length;
    if (n < 2)
        return n;

    let maxLength = 1, start = 0;
    for (let i = 0; i < n; i++) {
        let low = i - 1;
        let high = i + 1;
        while (high < n && str[high] == str[i])
            high++;

        while (low >= 0 && str[low] == str[i])
            low--;

        while (low >= 0 && high < n && str[low] == str[high]) {
            low--;
            high++;
        }

        let length = high - low - 1;
        if (maxLength < length) {
            maxLength = length;
            start = low + 1;
        }
    }

    console.log(str.substring(start, maxLength + start));
    return maxLength;
}

let str = "forgeeksskeegfor";
console.log(longestPalSubstr(str));



