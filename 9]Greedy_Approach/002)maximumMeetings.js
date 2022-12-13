function maxMeetings(s, f, n) {
    let aCollectiveArray = []
    for (let i = 0; i < n; i++) {
        var aNew = [];
        aNew.push(i + 1);
        aNew.push(s[i]);
        aNew.push(f[i]);
        aCollectiveArray.push(aNew);
    }
    aCollectiveArray.push((a, b) => a[2] - b[2]);
    var endTime = aCollectiveArray[0][2];

    var result = []

    result.push(aCollectiveArray[0][0]);

    for (var k = 1; k < aCollectiveArray.length; k++) {
        var startTime = aCollectiveArray[k][1];
        if (startTime > endTime) {
            result.push(aCollectiveArray[k][0]);
            endTime = aCollectiveArray[k][2]
        }
    }
    return result;
}

let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
let n = s.length;
console.log(maxMeetings(s, f, n));       //[ 1, 2, 4, 5 ]th meetings
