// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

function reverseInGroups(arr, n, k){
    for (let i = 0; i<n; i+=k){
      let beg = i;
      let end = Math.min(n-1, i+k-1);
  
      while (beg < end) {
          let temp = arr[beg];
          arr[beg] = arr[end];
          arr[end] = temp;
  
          beg += 1;
          end -= 1;
      }
    }
    console.log(`${arr}`)
  }
  
  let arr = [1, 2, 3, 4, 5];  //3 2 1 5 4
  let n = arr.length;
  let k = 3
  reverseInGroups(arr, n, k)