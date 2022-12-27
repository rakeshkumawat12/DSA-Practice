function getMaxCountChar(count) {
    let maxCount = 0
    let maxChar
    for (let i = 0; i < 26; i++) {
        if (count[i] > maxCount) {
            maxCount = count[i]
            maxChar = String.fromCharCode(i + ('a').charCodeAt(0))
        }
    }
    return [maxCount, maxChar]
}

function rearrangeString(S) {
    let n = S.length

    if (!n)
        return false

    let count = new Array(26).fill(0)
    for (let char of S)
        count[char.charCodeAt(0) - ('a').charCodeAt(0)] += 1

    let [maxCount, maxChar] = getMaxCountChar(count)

    if (maxCount > Math.floor((n + 1) / 2))
        return false

    let res = new Array(n)

    let ind = 0

    while (maxCount) {
        res[ind] = maxChar
        ind += 2
        maxCount -= 1
    }

    count[maxChar.charCodeAt(0) - 'a'.charCodeAt(0)] = 0

    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (ind >= n)
                ind = 1
            res[ind] = String.fromCharCode(i + ('a').charCodeAt(0))
            ind += 2
            count[i] -= 1
        }
    }
    return res.join('')
}

let str = 'bbbaa'
console.log(rearrangeString(str))


