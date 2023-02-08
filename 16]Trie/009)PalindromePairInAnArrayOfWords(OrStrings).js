function isPalindrome(str) {
    let len = str.length;

    for (let i = 0; i < len / 2; i++)
        if (str[i] != str[len - i - 1])
            return false;

    return true;
}

function checkPalindromePair(vect) {
    for (let i = 0; i < vect.length - 1; i++) {
        for (let j = i + 1; j < vect.length; j++) {
            let checkStr = "";

            checkStr = checkStr + vect[i] + vect[j];

            if (isPalindrome(checkStr))
                return true;

            checkStr = vect[j] + vect[i];

            if (isPalindrome(checkStr))
                return true;
        }
    }
    return false;
}

let vect = ["geekf", "geeks", "or", "keeg", "abc", "bc"]

console.log(checkPalindromePair(vect))
