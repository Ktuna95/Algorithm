/*
    사과의 품질점수 1 ~ k까지 존재(k가 최상품)
    사과의 가격 p(품질) * m(개수)

    1. 사과 정렬
    2. 정렬된거에서 반복문을 m만큼 돌게해서 정렬한 사과 뺴오기
    3. k * 빼온 사과
    
*/
function solution(k, m, score) {
    var answer = 0;
    
    //1. 내림차순 정렬
    score.sort((a,b)=>b-a);

    //2. 최소값의 초기값을 m - 1로 설정
    let min = m - 1;

    for(let i = 0; i < Math.floor(score.length / m); i++) {        
        answer += score[min] * m;
        min += m;
    }    

    return answer;
}
solution(3,4,[1,2,3,1,2,3,1])