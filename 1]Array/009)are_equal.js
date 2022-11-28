// Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal

function areEqual(arr1, arr2){
  let M = arr1.length;
  let N = arr2.length;

  if (M != N){
    console.log(false);
  }

  arr1.sort()
  arr2.sort()

  for (let i=0; i<M; i++){
    if (arr1[i] != arr2[i]){
      console.log(false)
    }
  }
  console.log(true);
}



let arr1 = [1, 2, 5, 4, 0];
let arr2 = [2, 4, 5, 0, 1];
areEqual(arr1, arr2)