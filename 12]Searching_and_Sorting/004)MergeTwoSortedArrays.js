function mergeArrays(arr1, arr2, n1, n2, arr3) {
	var i = 0, j = 0, k = 0;
	
	while (i < n1) {
		arr3[k++] = arr1[i++];
	}

	while (j < n2) {
		arr3[k++] = arr2[j++];
	}

	console.log(arr3.sort());
}
var arr1 = [1, 3, 5, 7];
var n1 = arr1.length;
var arr2 = [2, 4, 6, 8];
var n2 = arr2.length;
var arr3 = new Array(n1 + n2);
mergeArrays(arr1, arr2, n1, n2, arr3);
