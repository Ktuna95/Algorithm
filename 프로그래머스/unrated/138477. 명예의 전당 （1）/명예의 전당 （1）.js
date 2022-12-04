/**
 * 매일 1명이 노래부름
 * 부른 사람의 점수가 k번째 이내이면 명예의 전당에 등록
 * k일까지는 모든 출연 가수의 점수가 등록
 * 명예의 전당 자리가 꽉 찼을 때 k번째 순위의 가수 점수보다 높으면
 * 그날 가수의 점수가 명예의 전당에 등록되고 기존가수의 점수는 내려옴
 * 내려온 점수를 배열로 리턴하기.
 * 
 * 1. 길이가 k인 배열 선언
 * 2. score배열의 요소를 k까지 k배열에 push
 * 3. sort
 * 
 * 4. 입력 들어올때마다 가장 작은수랑 비교하기
 * 5. 가장 작은 수를 answer배열에 push후 삭제하고 다음 입력값을 push
 */
 function solution(k, score) {
    var answer = [];
    const chart = [];
    let cnt = 0;

    // while(cnt < k){
    //     chart.push(score[0]);
    //     chart.sort((a,b)=>b-a);
    //     answer.push(chart[chart.length-1]);
    //     score.shift();        
    //     cnt++;
    // }    
    
    cnt = 0;

    while(score.length !== 0){
        if(chart.length < k){
            chart.push(score[0]);
            chart.sort((a,b)=>b-a);
            answer.push(chart[chart.length-1]);
            score.shift();                    
        }    
        else{
            if(chart[chart.length-1]<score[0]){            
                chart[chart.length-1] = score[0];
                chart.sort((a,b)=>b-a);
                answer.push(chart[chart.length-1]);
                score.shift();            
            }
            else {
                answer.push(chart[chart.length-1]);
                score.shift();
                continue;
            }    
        }
    }    
    return answer;
}
solution(3, [10, 100, 20, 150, 1, 100, 200])
//200 150 100 100 20 10 1
//solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);