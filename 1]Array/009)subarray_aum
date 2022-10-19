// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

function subArraySum(arr, n, sum){ 
  for (let i = 0; i<n; i++){
    let currentSum = arr[i];
    if(currentSum == sum){
      console.log("Sum found at index " + i)
    }
    else {
      for (let j=i+1; j<n; j++){
        currentSum += arr[j];
        if (currentSum == sum){
          console.log("Sum found between indexes " + i + " and " + j)
        }
      }
    }
  }
  console.log("No subarray found");
}

let arr = [1,2,3,7,5]
let n = arr.length;
let sum = 12
subArraySum(arr, n, sum)