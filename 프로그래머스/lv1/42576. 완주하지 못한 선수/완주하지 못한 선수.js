function solution(participant, completion) {
    var answer = '';
    //1.filter는 새로운 배열을 리턴
    // answer = participant.filter(el => !completion.includes(el));
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i]
            break
        }
    }
    return answer;
}
solution(["leo", "kiki", "eden"],["eden", "kiki"]);