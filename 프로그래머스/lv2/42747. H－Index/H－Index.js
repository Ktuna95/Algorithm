/**
 * n = citations.length;
 * h = ??
 *   1) 많이 인용된순으로 정렬
 *   2) 피인용수와 논문수가 같아지면 h-지수
 */
function solution(citations) {
    var answer = 0;
    let sort_citations = citations.sort((a,b)=>b-a);

    for(answer=0; answer<citations.length; answer++){  
        if(citations[answer]<=answer) return answer;
    }
    return citations.length;
}