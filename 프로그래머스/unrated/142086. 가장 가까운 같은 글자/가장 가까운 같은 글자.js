/*
    * 해결방식) 스택
    1. 스택확인
    1-1) 스택확인후 넣으려는 문자열이 존재하지 않는다면 -1을 ans에 삽입
    1-2) 스택에 그 문자열을 넣어주기
    
    1-3) 스택확인후 넣으려는 문자열이 존재한다면 
        '스택길이 - 가장위에 있는 문자열의 인덱스를 ans에 삽입
    1-4) 스택에 그 문자열을 넣어주기


*/
function solution(s) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        // 1-1) 스택확인후 넣으려는 문자열이 존재하지 않는다면 -1을 ans에 삽입
        if(!stack.includes(s[i])){
            ans.push(-1);
            stack.push(s[i]); // 1-2) 스택에 그 문자열을 넣어주기
            continue;
        }
        
        // 1-3) 스택확인후 넣으려는 문자열이 존재한다면 
        if(stack.includes(s[i])){
            // '스택길이 - 가장위에 있는 문자열의 인덱스를 ans에 삽입
            ans.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    }
    
    return ans;
}