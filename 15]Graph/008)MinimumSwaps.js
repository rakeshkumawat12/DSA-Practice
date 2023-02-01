function minSwaps(nums) {
    var len = nums.length;
    var map = new Map();
    for (i = 0; i < len; i++)
        map.set(nums[i], i);

    nums.sort((a, b) => a - b);

    var visited = Array(len).fill(false);

    var ans = 0;
    for (var i = 0; i < len; i++) {

        if (visited[i] || map.get(nums[i]) == i)
            continue;

        var j = i, cycle_size = 0;
        while (!visited[j]) {
            visited[j] = true;

            j = map.get(nums[j]);
            cycle_size++;
        }

        if (cycle_size > 0) {
            ans += (cycle_size - 1);
        }
    }
    return ans;
}

var a = [1, 5, 4, 3, 2];
console.log(minSwaps(a));
