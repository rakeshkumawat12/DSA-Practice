function getInvCount(arr) {
    let invCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                invCount++;
        }
    }
    return invCount;
}

arr = [1, 20, 6, 4, 5];
console.log(getInvCount(arr));

