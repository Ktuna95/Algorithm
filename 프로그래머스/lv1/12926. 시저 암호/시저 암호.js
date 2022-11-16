/*
    1. 대소문자 배열
        1) 대문자, 소문자 배열 선언 및 초기화
        2) s가 대문자인지 확인
        3) 대문자면 대문자 배열요소 리턴, 소문자면 소문자 배열요소 리턴
        4) s.indexOf(n)으로 해당 인덱스값 찾기   
        예외처리) 공백처리
    2. 아스키코드 
    
*/
function solution(s, n) {
    var answer = '';
    let s_Lower = 'abcdefghijklmnopqrstuvwxyz';
    let s_Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for(let i=0; i<s.length; i++){        
        let tmp = s[i];
        
        if(tmp === " "){ //공백을 만나면
            answer += " ";
            continue;
        }
        let arr;
        if(s_Upper.includes(tmp)) arr = s_Upper;        
        else arr = s_Lower;
            
        let index = arr.indexOf(tmp) + n;
        if(index>=arr.length) index -= arr.length;
        answer += arr[index];
        
    }
    
    return answer;
}