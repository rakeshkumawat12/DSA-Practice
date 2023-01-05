function sortBasedOnFrequencyAndValue(list) {
    let n = arr.length;
    let mapCount = new Map();
    let mapIndex = new Map();
    for (let i = 0; i < n; i++) {
        if (mapCount.has(arr[i])) {
            mapCount.set(arr[i],
                mapCount.get(arr[i]) + 1);
        }
        else {
            mapCount.set(arr[i], 1);
            mapIndex.set(arr[i], i);
        }
    }

    list.sort(function (n1, n2) {

        let freq1 = mapCount.get(n1);
        let freq2 = mapCount.get(n2);
        if (freq1 != freq2) {
            return freq2 - freq1;
        }
        else {
            return mapIndex.get(n1) - mapIndex.get(n2);
        }
    });
    console.log(list.join(" "));
}


let arr = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8];
sortBasedOnFrequencyAndValue(arr);


