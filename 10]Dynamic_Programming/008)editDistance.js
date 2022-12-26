function editDistDP(str1, str2, m, n) {
    let dp = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
      dp[i] = new Array(n + 1);
      for (let j = 0; j < n + 1; j++) {
        dp[i][j] = 0;
      }
    }
  
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i == 0)
          dp[i][j] = j; 
  
        else if (j == 0)
          dp[i][j] = i; 
  
        else if (str1[i - 1] == str2[j - 1])
          dp[i][j] = dp[i - 1][j - 1];
  
        else
          dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
    return dp[m][n];
  }
  
  let str1 = "sunday";
  let str2 = "saturday";
  console.log(editDistDP(str1, str2, str1.length, str2.length));
  
  
  