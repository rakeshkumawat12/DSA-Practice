// Given two sorted arrays arr1 and arr2 of size N and M respectively and an element K. The task is to find the element that would be at the k’th position of the final sorted array.

function kthElement(arr1, arr2, k){ 

        function compare(num1, num2){
          return num1 - num2;
        }
  
        arr3 = [...arr1, ...arr2];
        arr3.sort(compare)
        
        console.log(arr3[k - 1])
    }

let arr1 = [2, 3, 6, 7, 9]
let arr2 = [1, 4, 8, 10]
let k = 5
kthElement(arr1, arr2, k)