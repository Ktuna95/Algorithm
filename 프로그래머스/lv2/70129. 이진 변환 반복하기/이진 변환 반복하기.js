function solution(s) {
    var answer = [];
    let tmp = s;        // 입력값 저장
    let round = 0;      // 실행한 회차
    let delzero = 0;    // 제거할 모든 0의 개수    
    
    const take1 = /[1]/g              // s에서 '1'만 가져오기
    const take0 = /[0]/g              // s에서 '0'만 가져오기      
    
    let search0 = 0;    // 제거할 0의 개수
    let search1 = 0;    // 0제거 후 길이

    while(tmp.length !== 1){                    
            round++; // 반복문이 돌 때마다 round를 더해주기
            //* Step1. 제거할 0의 개수 구하기            
            // tmp에 0이 있다면 0의 개수를 반환
            if(take0.test(tmp)){                     // tmp에 0이 있다면
                search0 = tmp.match(take0).length;   // tmp의 0의 개수를 반환                
            }else{
                search0 = 0; // tmp에 0이 없다면 제거할 0의 개수 0개로 선언
            }
            delzero += search0; // 0을 제거한 개수
            //* Step2. 이진법화 하기위한 1의 개수 구하기
            search1 = tmp.match(take1).length;   // 1의 개수를 반환               
            //* Step3. 이진법화로 변환하기 
            tmp = search1.toString(2); // 1의 개수를 이진법화                           
    }    
    answer.push(round, delzero);    
    return answer;
}