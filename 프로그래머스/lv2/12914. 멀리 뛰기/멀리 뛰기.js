/* 문제해결법 : DP, Bottom-Up(Tabulation) 방식 - 반복문 사용

 * case 1) n = 1
 * 
 */
const dp = [];

function solution(n) {    
    
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }

    return dp[n];
}