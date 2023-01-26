function isPowerOfTwo(n) {
    if (n == 0)
      return false;
  
    return !(n&(n-1));
  }
  
  if (isPowerOfTwo(32))
    console.log("Yes");
  else
    console.log("No");
  
  
  
  
  