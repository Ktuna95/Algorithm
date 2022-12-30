function solution(n,a,b){
    var answer = 0; // 라운드 진행 횟수
    
    while(1){
        answer++;

        if(a % 2 === 0){            // a가 짝수
            if(a - 1 === b) break;  // a와 b의 차이가 1이면 해당라운드에서 만났으므로 break
        } 
        else if(a % 2 === 1){       // a가 홀수
            if(a + 1 === b) break;  // a와 b의 차이가 1이면 해당라운드에서 만났으므로 break
        }
        
        //라운드를 진행하며 절반씩 숫자들을 줄임
        a = Math.ceil(a / 2);       
        b = Math.ceil(b / 2);
    }
    return answer;
}

solution(8, 4, 7) // 3