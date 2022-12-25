function findMinInsertions(str, l, h) {
    if (l > h)
        return Number.MAX_VALUE;

    if (l == h)
        return 0;

    if (l == h - 1)
        return (str[l] == str[h]) ? 0 : 1;

    return (str[l] == str[h]) ?
        findMinInsertions(str, l + 1, h - 1) :
        (Math.min(findMinInsertions(str, l, h - 1),
            findMinInsertions(str, l + 1, h)) + 1)
}

let str = "geeks";
console.log(findMinInsertions(str, 0, str.length - 1));



