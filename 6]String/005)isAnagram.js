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