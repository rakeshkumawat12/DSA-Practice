function isAnagram(S1, S2) {
    let sorted1 = S1.split('').sort().join('').toLowerCase();
    let sorted2 = S2.split('').sort().join('').toLowerCase();
    if (sorted1 == sorted2) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

let S1 = "geeksforgeeks"
let S2 = "yorgeeksgeeks"
isAnagram(S1, S2)




// X
function isAnagram(str1, str2) {
    var A = new Array(26).fill(0);
    var B = new Array(26).fill(0);
    let len1 = str1.length;
    let len2 = str2.length;
    let flag = 0;
    if (len1 != len2)
        console.log(false)
    for (let i = 0; i < len1; i++) {
        A[str1[i] - 'a']++
        B[str2[i] - 'a']++
    }
    for (let i = 0; i < 26; i++) {
        if (A[i] != B[i]) {
            flag = 1;
            break
        }
    }
    if (flag == 1)
        console.log(false)
    else
        console.log(true)
}

let str1 = "geeksforgeeks"
let str2 = "forgeeksgeeks"
isAnagram(str1, str2)
