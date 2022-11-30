/* 
^ 사용된 자료구조 : 해시
 해시테이블과 배열의 차이
    배열은 데이터를 0에서 부터 순서대로 번호에 맞추어서 집어넣는 용도
    해시테이블은 key값에 따라서 데이터를 기억하는 용도
    Ex) 해시테이블에서 key 3에 값이 있는가? 는 o(1)연산이지만 
        array에서는 처음부터 끝까지 체크해야하므로 o(N)이 된다.
 */
function solution(participant, completion) {
    
    //1.filter는 새로운 배열을 리턴
    // answer = participant.filter(el => !completion.includes(el));
    // participant.sort();
    // completion.sort();

    // for(let i = 0; i < participant.length; i++) {
    //     if(participant[i] === completion[i]) continue;                     
    //     return participant[i];
    // }
    
    const completedRunnerMapper ={}
    let unFinishedRunner ='';
    completion.forEach((runner)=>{
        completedRunnerMapper[runner] =
            completedRunnerMapper[runner] +1 || 1
    })
    
    participant.forEach((runner)=>{
        if(completedRunnerMapper[runner]){
            completedRunnerMapper[runner] =
                completedRunnerMapper[runner] -1
        } else{
            unFinishedRunner = runner;
        }
    })
    return unFinishedRunner;
}



solution(["leo", "kiki", "eden"],["eden", "kiki"]);