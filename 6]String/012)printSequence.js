
function printSequence(arr, input) {
    let output = "";
    let n = input.length;
    for (let i = 0; i < n; i++) {
        if (input[i] == ' ')
            output = output + "0".charCodeAt(0);
        else {
            let position = input[i].charCodeAt(0) - 'A'.charCodeAt(0);
            output = output + arr[position];
        }
    }
    console.log(output);
}

let str = ["2", "22", "222",
    "3", "33", "333",
    "4", "44", "444",
    "5", "55", "555",
    "6", "66", "666",
    "7", "77", "777", "7777",
    "8", "88", "888",
    "9", "99", "999", "9999"]

let input = "GEEKSFORGEEKS";
printSequence(str, input)

