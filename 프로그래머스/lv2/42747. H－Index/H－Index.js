/**
 * n = citations.length;
 * h = ??
 *   1) 많이 인용된순으로 정렬
 *   2) 피인용수와 논문수가 같아지면 h-지수
 */
function solution(citations) {
    var answer = 0;
    // 내림차순
    let sort_citations = citations.sort((a,b)=>b-a);

    // h번 이상 인용된 것이 h번째인 것
    for(answer=0; answer<citations.length; answer++){  
        if(citations[answer]<=answer) return answer;
    }

    //없다면 논문의 개수가 h
    return citations.length;
}