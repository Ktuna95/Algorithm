
function solution(s) {
    var answer = [];
    let tmp = s;
    let round = 0;
    let delzero = 0;
    console.log(tmp)
    
    const take1 = /[1]/g              // s에서 '1'만 가져오기
    const take0 = /[0]/g              // s에서 '0'만 가져오기      
    
    let s_take0 = 0;
    let s_take1 = 0;

    while(tmp.length !== 1){                    
            round++; // 반복문이 돌 때마다 round를 더해주기
            //* Step1. 제거할 0의 개수, 0 제거 후 길이 구하기            
            if(take0.test(tmp)){                     // tmp에 0이 있다면
                s_take0 = tmp.match(take0).length;   // 0을 0의 개수 반환
            }else{
                s_take0 = 0;
            }
            
            s_take1 = tmp.match(take1).length;   // 0제거 후 1의 개수 반환
            
            console.log(s_take1)// 제거할 0의 개수
            console.log(s_take0)// 0제거 후 길이
            delzero += s_take0; // 0을 제거한 개수
    
            //* Step2. 이진 변환 결과
            tmp = s_take1.toString(2); // 1의 개수를 이진법화
            console.log(tmp);
               
    }
    console.log(round, delzero)
    answer.push(round, delzero);    
    return answer;
}
//solution("110010101001");
solution("01110");
//solution("1111111");