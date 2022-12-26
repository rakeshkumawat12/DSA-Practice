function getMedian(arr) {
    arr.sort((a, b) => {
        return a - b
    })

    let n = arr.length
    if (n % 2 === 1) {
        return arr[parseInt(n / 2)]
    }
    let one = n / 2
    let two = parseInt((n - 1) / 2)
    return (arr[one] + arr[two]) / 2
}

let arr = [5, 15, 10, 20];
console.log(getMedian(arr));