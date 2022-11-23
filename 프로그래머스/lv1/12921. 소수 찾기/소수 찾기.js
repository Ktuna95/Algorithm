/*

    에라토스테네스의 체
    
*/
function solution(n) {
    var answer = 0;
    const arr = new Array(n);
    
    for(let i = 2; i<= n; i++){
        arr[i] = i;    
    }
    
    for(let i = 2; i<= n; i++){
        //자기자신은 제외
        if(arr[i] === 0) continue;
        //소수가 아니면 해당 요소를 0으로 변경
        for(let j = i+i; j <= n; j+=i){
            arr[j] = 0;
        }
    }
    
    for(let i= 2; i <= n; i++){
        if(arr[i] !== 0) answer++;
    }
    
    return answer;
}
solution(10);