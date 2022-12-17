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