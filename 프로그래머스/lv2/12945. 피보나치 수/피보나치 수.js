function solution(n) {
    let dp = [];
    var result;
    dp[0] = 0;
    dp[1] = 1;
   let i;
    
    for(i=2; i<=n; i++) {
        result = dp[i-1] + dp[i-2];
        dp.push(result%1234567);
    }
    
    return dp[n];
}