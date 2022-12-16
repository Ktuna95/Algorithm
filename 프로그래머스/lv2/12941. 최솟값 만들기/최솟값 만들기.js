/*
    a배열의 max값 * b배열의 min값
    두 요소 삭제
    length가 0일때까지 반복
*/
function solution(A,B){

    A.sort((a,b)=>a-b); // 오름차순 정렬
    B.sort((a,b)=>b-a); // 내림차순 정렬

    let sum=0;    
    let i=0;
    
    while(A.length!==0){
        sum += A[i] * B[i];
        A.shift();
        B.shift();
    }
    return sum;
}