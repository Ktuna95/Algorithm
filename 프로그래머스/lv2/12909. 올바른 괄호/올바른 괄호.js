 //* 자료구조 : 스택
/** 1. 스택배열 2개 만들기!! '('스택, ')'스택
 *  2. 입력값으로 '('이 들어오면 '(' 스택에 '('를 추가 
 *     입력값으로 ')'이 들어오면 '(' 스택에 값이 있는지 보고 있으면 제거하기
 *     입력값으로 ')'이 들어왔는데 '('스택이 비어있으면 false를 리턴
 *  3. 반복문이 끝났는데도 불구하고 stackarr에 값이 남아있으면 false를 리턴
       그렇지 않다면 true를 리턴
 */
function solution(s){
    let answer = true;
    const stackarr = [];
    s = s.split('');
    
    if(s[0] === ')' && stackarr.length === 0) return answer = false;
    
    for (const value of s){
        if(value === '(') {
            stackarr.push(value);
            continue;
        }    
        else if(value === ')'){
            if(stackarr.length !== 0) stackarr.pop();
            else return answer = false;
        }
        else return answer = false;
    }
    return stackarr.length !== 0 ? false : answer;
 }