function findCommon(ar1, ar2, ar3, n1, n2, n3){
    var i = 0,j = 0,k = 0;
    while (i < n1 && j < n2 && k < n3)
    {
      if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
      {
        console.log(ar1[i]);
        i++;
        j++;
        k++;
      }
      else if (ar1[i] < ar2[j]) i++;
      else if (ar2[j] < ar3[k]) j++;
      else k++;
    }
  }

var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
var n1 = ar1.length;
var n2 = ar2.length;
var n3 = ar3.length;
findCommon(ar1, ar2, ar3, n1, n2, n3)