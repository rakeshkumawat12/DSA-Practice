// Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.The result is going to be very large, hence return the result in the form of a string.

function printLargest(arr){
  
    function myCompare(X, Y){
      let XY = X + Y;
      let YX = Y + X;
      return (YX - XY)
  }
    
      arr.sort(myCompare);
      for(let i = 0; i < arr.length; i++)
      console.log(arr[i])
      console.log(arr.join(""))
      
  }
  let arr = [];
  arr.push("54");
  arr.push("546");
  arr.push("548");
  arr.push("60");
  printLargest(arr);  //6054854654
   