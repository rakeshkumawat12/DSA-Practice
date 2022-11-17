function findPairs(arr1, arr2, x) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] + arr2[j] == x) {
                console.log(arr1[i], arr2[j])
            }
        }
    }
}

let arr1 = [-1, -2, 4, -6, 5, 7]
let arr2 = [6, 3, 4, 0];
let x = 8
findPairs(arr1, arr2, x)