/*
1. 큐방식(인덱스값이 변경되어 관리가 힘듦)
    핵심 = 최대값을 만났을 때 location이 0인지 확인
    1)  idx가 내가 찾는 priorities가 맞는지 확인한다.
    2)  아니라면 해당 요소를 맨뒤로 보내고, idx-- 해주기
        맞다면 idx가 0인지 확인        
*/
function solution(priorities, location) {
    let answer = 0;         // 인쇄한 횟수    
    let cnt = 0             // 문서의 위치    
    let idx = location;     // 줄여나갈 idx
    
    while (priorities.length > 0) {
        
        const que = priorities.shift();   // 맨 앞의 문서를 꺼낸다
                                        // 만약 맨앞의 문서의 우선순위보다 높은 문서가 존재한다면
        if (priorities.filter((e) => e > que).length > 0) {            
            priorities.push(que);       // 인쇄를 하지 않고 배열의 맨 뒤에 넣는다.
                                        // 맨앞의 문서의 우선순위보다 높은 문서가 없다면
        } else {
            cnt++;                      // cnt++                        
            if (idx === 0) {            // idx가 0이라면 cnt를 리턴한다.
                return answer = cnt;
            }
        }        
        idx--;        
        if (idx === -1) {               // 만약 문서가 맨뒤로 갔다면                                
            idx = priorities.length - 1; // 내문서 위치인덱스도 맨뒤로 바꿔준다.
        }
    }
    return answer;
}
