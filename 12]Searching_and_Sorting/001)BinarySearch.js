function binarySearch(arr, l, r, x){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] == x)
			return mid;

		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		return binarySearch(arr, mid + 1, r, x);
	}

	return -1;
}

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
console.log(binarySearch(arr, 0, n - 1, x));

