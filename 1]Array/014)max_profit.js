<!-- The cost of a stock on each day is given in an array. Find the maximum profit that you can make by buying and selling on those days. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all. -->

function maxProfit(arr){
  let max_Profit = 0;
  for (let i=1; i<arr.length; i++){
    if (arr[i]>arr[i-1]){
      max_Profit += arr[i] - arr[i-1]
    }
  }
  console.log(max_Profit)
}

let arr = [100, 180, 260, 310, 40, 535, 695]
maxProfit(arr)