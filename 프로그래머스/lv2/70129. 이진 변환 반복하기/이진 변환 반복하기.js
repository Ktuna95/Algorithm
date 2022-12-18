
function solution(s) {
    var answer = [];
    let round = 0;      // 실행한 회차
    let countzero = 0;    // 제거할 모든 0의 개수    
    
    const take1 = /[1]/g              // s에서 '1'만 가져오기
    const take0 = /[0]/g              // s에서 '0'만 가져오기      
    
    let delzero = 0;    // 제거할 0의 개수
    let num1 = 0;    // 0제거 후 값의 길이

    while(s.length !== 1){                    
            round++; // 반복문이 돌 때마다 round를 더해주기
            //* Step1. 제거할 0의 개수 구하기            
            // tmp에 0이 있다면 0의 개수를 반환
            if(take0.test(s)){                     // tmp에 0이 있다면
                delzero = s.match(take0).length;   // tmp의 0의 개수를 반환
            }else{
                delzero = 0; // tmp에 0이 없다면 제거할 0의 개수 0개로 선언
            }
            countzero += delzero; // 0을 제거한 개수

            //* Step2. 이진법화 하기위한 1의 개수 구하기
            num1 = s.match(take1).length;   // 1의 개수를 반환
            
            //* Step3. 가져온 1의 개수를 이진법화로 변환하기             
            s = num1.toString(2); // 1의 개수를 이진법화                        
    } 
    answer.push(round, countzero);    
    return answer;
}