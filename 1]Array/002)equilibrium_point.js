// Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array. 
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

function findElement(arr, n){
    for (let i = 1; i<n; i++){
        let leftSum = 0;
        for (j=i-1; j>=0; j--){
            leftSum += arr[j];
        }

        let rightSum = 0;
        for (k=i+1; k>n; k++){
            rightSum += arr[k];
        }

        if (leftSum === rightSum){
            console.log(arr[i]);
        }
    }
}
    
let arr = [1,3,5,2,2];
let n = a.length;
findElement(arr, n) //3 